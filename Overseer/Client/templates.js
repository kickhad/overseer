angular.module('overseer').run(['$templateCache', function($templateCache) {$templateCache.put('directives/printer.html','<div class="printer" ng-class="{ zoomed: printerCtrl.zoom }">\r\n    <div class="webcam" ng-if="printerCtrl.model.config.webCamUrl" ng-click="printerCtrl.toggleZoom()" style="background-image: url(\'{{printerCtrl.webcamUrl}}\');" />\r\n    <div class="content">\r\n        <md-progress-linear md-mode="determinate" value="{{ printerCtrl.status.progress }}" title="{{ printerCtrl.status.progress | number : 1 }}%"></md-progress-linear>\r\n        <div class="status">\r\n            <h2 ng-bind="printerCtrl.model.name"></h2>\r\n            <span class="state" ng-if="printerCtrl.connecting">\r\n                <span translate="connecting"></span>\r\n            </span>\r\n            <span class="state" ng-if="!printerCtrl.connecting && printerCtrl.model.disabled">\r\n                <span translate="disabled"></span>\r\n            </span>\r\n            <span class="state" ng-if="printerCtrl.status">\r\n                <span translate="{{ printerCtrl.status.state }}"></span>\r\n                <span ng-if="printerCtrl.isPrinting">\r\n                    (<span translate="remaining"></span>: <span ng-bind="printerCtrl.status.estimatedTimeRemaining | duration"></span>)\r\n                </span>\r\n            </span>\r\n        </div>\r\n        <div class="controls {{ printerCtrl.status.state }}" ng-class="{ active: printerCtrl.isPrinting || printerCtrl.isPaused }">\r\n            <md-button class="md-raised md-primary resume small" ng-click="printerCtrl.resume()">\r\n                <i class="fa fa-play"></i>\r\n            </md-button>\r\n            <md-button class="md-raised md-warn pause small" ng-click="printerCtrl.pause()">\r\n                <i class="fa fa-pause"></i>\r\n            </md-button>\r\n            <md-button class="md-raised cancel small dark" ng-click="printerCtrl.cancel()">\r\n                <i class="fa fa-stop"></i>\r\n            </md-button>\r\n            <md-button class="md-raised tune small dark" ng-click="printerCtrl.tune()">\r\n                <i class="fa fa-wrench"></i>\r\n            </md-button>\r\n        </div>\r\n        <div class="controls" ng-class="{ active: printerCtrl.isIdle || printerCtrl.isDisconnected }">\r\n            <md-button class="md-raised web-access small dark" href="{{ printerCtrl.model.config.url }}" target="_blank" title="{{ \'openWebsite\' | translate }}">\r\n                <i class="fa fa-external-link"></i>\r\n            </md-button>\r\n        </div>\r\n        <div class="controls" ng-class="{ active: printerCtrl.isDisabled }">\r\n            <md-button class="md-raised web-access small dark" href="/#!/configuration/printers/edit/{{ printerCtrl.model.id }}" title="{{ \'edit\' | translate }}">\r\n                <i class="fa fa-gear"></i>\r\n            </md-button>\r\n        </div>\r\n    </div>\r\n    <div class="temps" ng-if="!printerCtrl.isDisconnected">\r\n        <table class="temp-table" ng-repeat="tool in printerCtrl.model.config.tools">\r\n            <tbody>\r\n                <tr>\r\n                    <td ng-bind="tool"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span ng-bind="printerCtrl.getActualTemp(tool) | number : 0"></span> &deg;C /\r\n                        <span ng-bind="printerCtrl.getTargetTemp(tool) | number : 0"></span> &deg;C\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class="temp-table" ng-if="printerCtrl.model.config.heatedBed">\r\n            <tbody>\r\n                <tr>\r\n                    <td translate="bed"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <span ng-bind="printerCtrl.getActualTemp(\'bed\') | number : 0"></span> &deg;C /\r\n                        <span ng-bind="printerCtrl.getTargetTemp(\'bed\') | number : 0"></span> &deg;C\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>');
$templateCache.put('modals/certificateException.html','<md-dialog class="cert-exception" flex-gt-md="40" flex="80">\r\n    <md-toolbar class="md-hue-2">\r\n        <div class="md-toolbar-tools">            \r\n            <h2 translate="certificateException"></h2>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-dialog-content>\r\n        <div>            \r\n            <p translate="certificateWarning"></p>           \r\n        </div>\r\n        <div>\r\n            <h4 translate="certificateInformation"></h4>\r\n            <table>\r\n                <tr>\r\n                    <td translate="issuedTo"></td>\r\n                    <td ng-bind="ctrl.certificateDetails.issuedTo"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td translate="issuedBy"></td>\r\n                    <td ng-bind="ctrl.certificateDetails.issuedBy"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td translate="issuedDate"></td>\r\n                    <td ng-bind="ctrl.certificateDetails.issueDate"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td translate="expireDate"></td>\r\n                    <td ng-bind="ctrl.certificateDetails.expireDate"></td>\r\n                </tr>\r\n                <tr>\r\n                    <td translate="thumbprint"></td>\r\n                    <td ng-bind="ctrl.certificateDetails.thumbprint"></td>\r\n                </tr>\r\n            </table>\r\n            <p translate="certificateCaution"></p>\r\n        </div>\r\n    </md-dialog-content>\r\n    <md-dialog-actions layout="row" layout-align="end center">\r\n        <md-button ng-click="ctrl.cancel()">\r\n            <span translate="cancel"></span>\r\n        </md-button>\r\n        <md-button ng-click="ctrl.addException()">\r\n            <span translate="add"></span>\r\n        </md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>');
$templateCache.put('modals/tune.html','<md-dialog class="tune" flex-gt-md="40" flex="80">\r\n    <md-toolbar class="md-hue-2">\r\n        <div class="md-toolbar-tools">\r\n            <div flex>\r\n                <h2>{{ ctrl.printer.name }}</h2>\r\n                <span class="status" translate="{{ ctrl.status.state }}"></span>\r\n            </div>\r\n            <a class="action-button" ng-if="ctrl.printer.config.url" href="{{ ctrl.printer.config.url }}" target="_blank">\r\n                <span translate="openWebsite"></span>\r\n                <i class="fa fa-external-link"></i>\r\n            </a>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-dialog-content>\r\n        <div layout="row" class="progress">\r\n            <div flex>\r\n                <h5 translate="Progress"></h5>\r\n                <md-progress-linear md-mode="determinate" value="{{ ctrl.status.progress }}" title="{{ ctrl.status.progress }}%"></md-progress-linear>\r\n                <div layout>\r\n                    <span class="elapsed-time" flex="50">\r\n                        <span class="time-label"><span translate="elapsed"></span>:</span>\r\n                        {{ ctrl.status.elapsedPrintTime | duration }}\r\n                    </span>\r\n                    <span class="estimated-time" flex="50">\r\n                        <span class="time-label"><span translate="estimated"></span>: </span>                        \r\n                        {{ ctrl.status.estimatedTimeRemaining | duration }}\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class="print-actions">\r\n                <md-button class="md-raised md-primary small" ng-if="ctrl.status.state === \'Paused\'" ng-click="ctrl.resume()">\r\n                    <i class="fa fa-play"></i>\r\n                </md-button>\r\n                <md-button class="md-raised md-warn small" ng-if="ctrl.status.state === \'Printing\'" ng-click="ctrl.pause()">\r\n                    <i class="fa fa-pause"></i>\r\n                </md-button>\r\n                <md-button class="md-raised small light" ng-click="ctrl.cancel()">\r\n                    <i class="fa fa-stop"></i>\r\n                </md-button>\r\n            </div>\r\n        </div>\r\n        <div layout-gt-sm="row" layout-xs="column">\r\n            <div flex flex-sm="100">\r\n                <table class="temp-table">\r\n                    <tbody>\r\n                        <tr ng-repeat="temp in ctrl.status.temperatures">\r\n                            <th ng-bind="temp.name"></th>\r\n                            <td class="actual-temp" ng-class="{ warm: (temp.actual / temp.target > 0.5), hot: (temp.actual / temp.target > 0.85) }">\r\n                                {{ temp.actual | number : 1 }} &deg;C\r\n                            </td>\r\n                            <td>\r\n                                <md-button class="md-raised smaller" ng-click="ctrl.decreaseTemp(temp.name)">\r\n                                    <i class="fa fa-minus"></i>\r\n                                </md-button>\r\n                                <span class="target-temp">\r\n                                    {{ temp.target | number : 0 }} &deg;C\r\n                                </span> \r\n                                <md-button class="md-raised smaller" ng-click="ctrl.increaseTemp(temp.name)">\r\n                                    <i class="fa fa-plus"></i>\r\n                                </md-button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div flex flex-sm="100" class="controls">\r\n                <table>\r\n                    <tbody>\r\n                    <tr>\r\n                        <th translate="fanSpeed"></th>\r\n                        <td>\r\n                            <md-slider class="md-primary" flex md-discrete ng-model="ctrl.status.fanSpeed" ng-model-options="ctrl.ngModelOptions" ng-change="ctrl.setFanSpeed()" step="1" min="0" max="100"></md-slider>\r\n                        </td>\r\n                        <td>\r\n                            {{ ctrl.status.fanSpeed }}%\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th translate="feedRate"></th>\r\n                        <td>                            \r\n                            <md-slider class="md-primary" flex md-discrete ng-model="ctrl.status.feedRate" ng-model-options="ctrl.ngModelOptions" ng-change="ctrl.setFeedRate()" step="1" min="50" max="150"></md-slider>\r\n                        </td>\r\n                        <td>\r\n                            {{ ctrl.status.feedRate }}%\r\n                        </td>\r\n                    </tr>\r\n                    <tr ng-repeat="(key, value) in ctrl.status.flowRates">\r\n                        <th>\r\n                            <span translate="flowRate"></span> <span class="tool-name" ng-if="ctrl.printer.config.tools.length > 1">" {{key}}</span>\r\n                        </th>\r\n                        <td>\r\n                            <md-slider class="md-primary" flex md-discrete ng-model="value" ng-model-options="ctrl.ngModelOptions" ng-change="ctrl.setFlowRate($index)" step="1" min="75" max="125"></md-slider>\r\n                        </td>\r\n                        <td>\r\n                            {{ value }}%\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </md-dialog-content>\r\n    <md-dialog-actions layout="row" layout-align="end center">\r\n        <md-button ng-click="ctrl.hide()">\r\n            <span translate="dismiss"></span>\r\n        </md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>');
$templateCache.put('views/index.html','<div>\r\n    <div ng-if="!ctrl.loading && ctrl.printers.length">\r\n        <resizer name="ctrl.resizer" count="ctrl.printers.length">\r\n            <printer ng-repeat="printer in ctrl.printers" model="printer" style="width: {{ ctrl.resizer.width }}%; height: {{ ctrl.resizer.height }}px"></printer>\r\n        </resizer>\r\n    </div>\r\n    <div class="no-printers" ng-if="!ctrl.loading && !ctrl.printers.length">\r\n        <p translate="noPrinter"></p>\r\n        <p>\r\n            <md-button href="/#!/configuration/printers/add">\r\n                <span translate="noPrintersAddPrinter"></span>                \r\n            </md-button>\r\n            <md-button href="/#!/configuration">\r\n                <span translate="noPrintersEditPrinters"></span>\r\n            </md-button>\r\n        </p>\r\n    </div>\r\n</div>');
$templateCache.put('views/login.html','<form name="loginForm" ng-disabled="ctrl.loading" novalidate>\r\n    <md-card flex-gt-sm="50" flex-offset-gt-sm="25">\r\n        <md-card-title>\r\n            <md-card-title-text>\r\n                <span class="md-headline" translate="login"></span>\r\n            </md-card-title-text>\r\n        </md-card-title>\r\n        <md-card-content>\r\n            <md-input-container ng-if="ctrl.error">\r\n                <div class="error" ng-bind="ctrl.error"></div>\r\n            </md-input-container>            \r\n            <md-input-container class="md-block">\r\n                <label translate="username"></label>\r\n                <input ng-model="ctrl.user.username" title="{{ username | translate }}" required/>\r\n            </md-input-container>\r\n            <md-input-container class="md-block">\r\n                <label translate="password"></label>\r\n                <input type="password" ng-model="ctrl.user.password" title="{{ password | translate }}" required/>\r\n            </md-input-container>\r\n        </md-card-content>\r\n        <md-card-actions layout="row" layout-align="end center">\r\n            <md-button type="submit" class="md-primary" ng-click="ctrl.login()" ng-disabled="ctrl.loading || loginForm.$pristine || loginForm.$invalid">\r\n                <span translate="login"></span>\r\n            </md-button>\r\n        </md-card-actions>\r\n    </md-card>\r\n</form>');
$templateCache.put('views/configuration/addPrinter.html','\r\n<form name="ctrl.addForm" class="form-vertical" novalidate>\r\n    <md-card flex-gt-sm="50" flex-offset-gt-sm="25">\r\n        <md-card-title>\r\n            <md-card-title-text>\r\n                <span class="md-headline" translate="addPrinter"></span>\r\n            </md-card-title-text>\r\n        </md-card-title>\r\n        <md-card-content>\r\n            \r\n            <md-input-container class="md-block">\r\n                <label translate="printerType"></label>\r\n                <md-select ng-model="ctrl.model.printerType" ng-disabled="ctrl.printerTypes.length === 1" required>\r\n                    <md-option ng-repeat="type in ctrl.printerTypes" value="{{type}}">\r\n                        {{ type | translate }}\r\n                    </md-option>\r\n                </md-select>\r\n            </md-input-container>\r\n\r\n            <md-input-container class="md-block" ng-if="ctrl.model.printerType">\r\n                <label translate="name"></label>\r\n                <input ng-model="ctrl.model.name" required/>\r\n            </md-input-container>\r\n\r\n            <ng-include ng-if="ctrl.configTemplateUrl" src="ctrl.configTemplateUrl"></ng-include>\r\n\r\n            <ng-include ng-if="ctrl.isRestfulProvider" src="\'views/configuration/advancedRest.html\'"></ng-include>\r\n        </md-card-content>\r\n        <md-card-actions layout="row" layout-align="end center">\r\n            <md-button href="/#!/configuration/printers" translate="cancel"></md-button>\r\n            <md-button type="submit" class="md-primary" ng-click="ctrl.addPrinter()" ng-disabled="ctrl.addForm.$pristine || ctrl.addForm.$invalid" translate="save"></md-button>\r\n        </md-card-actions>\r\n    </md-card>\r\n</form>');
$templateCache.put('views/configuration/addUser.html','<form name="ctrl.addForm" novalidate>\r\n    <md-card flex-gt-sm="50" flex-offset-gt-sm="25">\r\n        <md-card-title>\r\n            <md-card-title-text>\r\n                <span class="md-headline">\r\n                    {{ \'add\' | translate }} {{ \'user\' | translate }}\r\n                </span>\r\n            </md-card-title-text>\r\n        </md-card-title>\r\n        <md-card-content>\r\n            <md-input-container ng-if="ctrl.error">\r\n                <div class="error" ng-bind="ctrl.error"></div>\r\n            </md-input-container>\r\n            <md-input-container class="md-block">\r\n                <label translate="username"></label>\r\n                <input type="text" ng-model="ctrl.user.username" min="8" required />\r\n            </md-input-container>\r\n            <md-input-container class="md-block">\r\n                <label translate="passwordEdit"></label>\r\n                <input type="password" ng-model="ctrl.user.password" min="8" required />\r\n            </md-input-container>\r\n            <md-input-container class="md-block">\r\n                <label translate="confirmPassword"></label>\r\n                <input type="password" ng-model="ctrl.user.passwordMatch" match="ctrl.user.password" required />\r\n            </md-input-container> \r\n            <md-input-container class="md-block">\r\n                <label translate="sessionLifetime"></label>\r\n                <md-select ng-model="ctrl.user.sessionLifetime" title="{{ sessionLifetimeTitle | translate }}">\r\n                    <md-option ng-repeat="lifetime in ctrl.lifetimes" ng-value="lifetime">\r\n                        <text ng-if="lifetime">{{ lifetime }} {{ \'days\' | translate }}</text>\r\n                        <text ng-if="!lifetime">{{ \'indefinite\' | translate }}</text>\r\n                    </md-option>\r\n                </md-select>\r\n            </md-input-container> \r\n        </md-card-content>\r\n        <md-card-actions layout="row" layout-align="end center">\r\n            <md-button href="/#!/configuration/users" translate="cancel"></md-button>\r\n            <md-button type="submit" class="md-primary" ng-click="ctrl.addUser()" ng-disabled="ctrl.addForm.$pristine || ctrl.addForm.$invalid || ctrl.loading" translate="save"></md-button>\r\n        </md-card-actions>\r\n    </md-card>\r\n</form>');
$templateCache.put('views/configuration/advancedRest.html','<div>    \r\n    <div ng-show="ctrl.advancedOpen">\r\n        <md-input-container class="md-block" title="{{ \'clientPemTitle\' | translate }}" rows="4">\r\n            <label translate="clientPem"></label>\r\n            <textarea ng-model="ctrl.model.config.clientCertificatePem"></textarea>\r\n        </md-input-container>\r\n        <md-button class="advanced-options md-raised" ng-click="ctrl.advancedOpen = 0">{{ \'hideAdvancedOptions\' | translate }}</md-button>\r\n    </div>\r\n    <md-button ng-if="!ctrl.advancedOpen" class="advanced-options md-raised md-primary" ng-click="ctrl.advancedOpen = 1">{{ \'showAdvancedOptions\' | translate }}</md-button>\r\n</div>');
$templateCache.put('views/configuration/editPrinter.html','<form name="editForm" novalidate>\r\n    <md-card flex-gt-sm="50" flex-offset-gt-sm="25">\r\n        <md-card-title>\r\n            <md-card-title-text>\r\n                <span class="md-headline">{{ \'editing\' | translate }} {{ ctrl.currentName }}</span>\r\n            </md-card-title-text>\r\n        </md-card-title>\r\n        <md-card-content>\r\n            <md-input-container class="md-block">\r\n                <label translate="name"></label>\r\n                <input ng-model="ctrl.model.name" required />\r\n            </md-input-container>\r\n\r\n            <ng-include src="ctrl.configTemplateUrl"></ng-include>\r\n\r\n            <ng-include ng-if="ctrl.isRestfulProvider" src="\'views/configuration/advancedRest.html\'"></ng-include>\r\n\r\n            <md-input-container class="md-block">\r\n                <md-switch class="md-primary" ng-model="ctrl.model.disabled" title="{{ \'disableMonitoringTitle\' | translate }}">\r\n                    <span translate="disableMonitoring"></span>\r\n                </md-switch>\r\n            </md-input-container>\r\n        </md-card-content>\r\n        <md-card-actions layout="row" layout-align="end center">\r\n            <div flex>\r\n                <md-button flex class="md-raised md-warn md-hue-2" ng-click="ctrl.deletePrinter()">\r\n                    <span translate="delete"></span>\r\n                </md-button>\r\n            </div>\r\n            <md-button href="/#!/configuration/printers"><span translate="cancel"></span></md-button>\r\n            <md-button type="submit" class="md-primary" ng-click="ctrl.updatePrinter()" ng-disabled="editForm.$pristine || editForm.$invalid">\r\n                <span translate="save"></span>\r\n            </md-button>\r\n        </md-card-actions>\r\n    </md-card>\r\n</form>\r\n');
$templateCache.put('views/configuration/editUser.html','<form name="ctrl.addForm" novalidate>\r\n    <md-card flex-gt-sm="50" flex-offset-gt-sm="25">\r\n        <md-card-title>\r\n            <md-card-title-text>\r\n                <span class="md-headline">\r\n                    {{ \'editing\' | translate }} {{ \'user\' | translate }} \'{{ ctrl.user.username }}\'\r\n                </span>\r\n            </md-card-title-text>\r\n        </md-card-title>\r\n\r\n        <md-card-content>\r\n            <md-input-container ng-if="ctrl.error">\r\n                <div class="error" ng-bind="ctrl.error"></div>\r\n            </md-input-container>\r\n            <md-input-container class="md-block">\r\n                <label translate="passwordEdit"></label>\r\n                <input type="password" ng-model="ctrl.user.password" min="8" />\r\n            </md-input-container>\r\n            <md-input-container class="md-block">\r\n                <label translate="confirmPassword"></label>\r\n                <input type="password" ng-model="ctrl.user.passwordMatch" match="ctrl.user.password" />\r\n            </md-input-container>\r\n            <md-input-container class="md-block">\r\n                <label translate="sessionLifetime"></label>\r\n                <md-select ng-model="ctrl.user.sessionLifetime" title="{{ sessionLifetimeTitle | translate }}">\r\n                    <md-option ng-repeat="lifetime in ctrl.lifetimes" ng-value="lifetime">\r\n                        <text ng-if="lifetime">{{ lifetime }} {{ \'days\' | translate }}</text>\r\n                        <text ng-if="!lifetime">{{ \'indefinite\' | translate }}</text>\r\n                    </md-option>\r\n                </md-select>\r\n            </md-input-container>\r\n        </md-card-content>\r\n\r\n        <md-card-actions layout="row" layout-align="end center">\r\n            <div flex>\r\n                <md-button flex class="md-raised md-warn md-hue-2" ng-click="ctrl.deleteUser()">\r\n                    <span translate="delete"></span>\r\n                </md-button>\r\n                <md-button ng-if="ctrl.user.isLoggedIn" ng-click="ctrl.logout()" translate="logout"></md-button>\r\n            </div>\r\n            <md-button href="/#!/configuration/users" translate="cancel"></md-button>\r\n            <md-button type="submit" class="md-primary" ng-click="ctrl.changePassword()" ng-disabled="ctrl.addForm.$pristine || ctrl.addForm.$invalid || ctrl.loading" translate="save"></md-button>\r\n        </md-card-actions>\r\n    </md-card>\r\n</form>');
$templateCache.put('views/configuration/index.html','<md-card class="configuration" ng-if="ctrl.ready" flex-gt-sm="50" flex-offset-gt-sm="25">\r\n    <md-card-content>\r\n        <md-tabs md-dynamic-height md-border-bottom>\r\n            <md-tab label="{{ \'generalSettings\' | translate }}" md-on-select="ctrl.setTabPath()">\r\n                <form name="ctrl.settingsForm" ng-disabled="ctrl.loading">\r\n                    <br />\r\n                    <md-input-container class="md-block">\r\n                        <label translate="pollInterval"></label>\r\n                        <md-select ng-model="ctrl.settings.interval" required title="{{ \'pollIntervalTitle\' | translate }}">\r\n                            <md-option ng-repeat="interval in ctrl.intervals" ng-value="interval">\r\n                                {{ interval / 1000 }} {{ \'seconds\' | translate }}\r\n                            </md-option>\r\n                        </md-select>\r\n                    </md-input-container>\r\n                    <md-input-container class="md-block">\r\n                        <label translate="localPort"></label>\r\n                        <input type="number" required ng-model="ctrl.settings.localPort" title="{{ \'localPortTitle\' | translate }}"/>\r\n                    </md-input-container>\r\n                    <md-input-container class="md-block">\r\n                        <md-switch class="md-primary" ng-model="ctrl.settings.hideDisabledPrinters" title="{{ \'hideUnmonitoredTitle\' | translate }}">\r\n                            <span translate="hideUnmonitored"></span>\r\n                        </md-switch>\r\n                    </md-input-container>\r\n                    <md-input-container class="md-block">\r\n                        <md-switch class="md-primary" ng-model="ctrl.settings.requiresAuthentication" title="{{ \'requiresAuthenticationTitle\' | translate }}">\r\n                            <span translate="requiresAuthentication"></span>\r\n                        </md-switch>\r\n                    </md-input-container>\r\n                    <div class="actions" layout="row" layout-align="end center">\r\n                        <md-button class="" ng-click="ctrl.revertSettings()" ng-disabled="ctrl.settingsForm.$pristine">\r\n                            <span translate="cancel"></span>\r\n                        </md-button>\r\n                        <md-button type="submit" class="md-primary" ng-click="ctrl.updateSettings()" ng-disabled="ctrl.settingsForm.$pristine || ctrl.settingsForm.$invalid">\r\n                            <span translate="save"></span>\r\n                        </md-button>\r\n                    </div>\r\n                </form>\r\n            </md-tab>\r\n            <md-tab label="{{ \'users\' | translate }}" md-active="ctrl.activeTab === \'users\'" md-on-select="ctrl.setTabPath(\'users\')">\r\n                <table class="config-table user-table">\r\n                    <thead>\r\n                        <tr>\r\n                            <th translate="username"></th>\r\n                            <th translate="sessionLifetime"></th>\r\n                            <th translate="isLoggedIn"></th>\r\n                            <th>\r\n                                <md-button href="/#!/configuration/users/add">\r\n                                    <i class="fa fa-plus"></i>\r\n                                    <span translate="add"></span>\r\n                                </md-button>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr ng-repeat="user in ctrl.users">\r\n                            <td ng-bind="user.username"></td>\r\n                            <td>\r\n                                <span ng-if="user.sessionLifetime">{{ user.sessionLifetime }} <span translate="days"></span></span>\r\n                                <span ng-if="!user.sessionLifetime" translate="indefinite"></span>\r\n                            </td>\r\n                            <td class="centered">\r\n                                <i ng-if="user.isLoggedIn" class="fa fa-check" title="{{ \'isLoggedInTitle\' | translate }}"></i>\r\n                            </td>                            \r\n                            <td>\r\n                                <md-button href="/#!/configuration/users/edit/{{ user.id }}">\r\n                                    <i class="fa fa-edit"></i>\r\n                                    <span translate="edit"></span>\r\n                                </md-button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr class="empty-row" ng-if="!ctrl.users.length">\r\n                            <td colspan="4" translate="noUsers"></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </md-tab>\r\n            <md-tab label="{{ \'printers\' | translate }}" md-active="ctrl.activeTab === \'printers\'" md-on-select="ctrl.setTabPath(\'printers\')">\r\n                <table class="config-table printers-table">\r\n                    <thead>\r\n                    <tr>\r\n                        <th translate="name"></th>\r\n                        <th translate="printerType"></th>\r\n                        <th translate="monitoringEnabled"></th>\r\n                        <th>\r\n                            <md-button href="/#!/configuration/printers/add">\r\n                                <i class="fa fa-plus"></i>\r\n                                <span translate="add"></span>\r\n                            </md-button>\r\n                        </th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr ng-repeat="printer in ctrl.printers">\r\n                        <td ng-bind="printer.name"></td>\r\n                        <td ng-bind="printer.printerType"></td>\r\n                        <td class="centered">\r\n                            <i ng-if="printer.disabled" class="fa fa-exclamation-triangle" title="{{ \'monitoringDisabled\' | translate }}"></i>\r\n                            <i ng-if="!printer.disabled" class="fa fa-check" title="{{ \'monitoringEnabled\' | translate }}"></i>\r\n                        </td>\r\n                        <td>\r\n                            <md-button href="/#!/configuration/printers/edit/{{printer.id}}">\r\n                                <i class="fa fa-edit"></i>\r\n                                <span translate="edit"></span>\r\n                            </md-button>\r\n                        </td>\r\n                    </tr>\r\n                    <tr class="empty-row" ng-if="!ctrl.printers.length">\r\n                        <td colspan="4" translate="noPrinters"></td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </md-tab>\r\n        </md-tabs>\r\n    </md-card-content>\r\n</md-card>');
$templateCache.put('views/configuration/Octoprint.html','<md-input-container class="md-block">\r\n    <label translate="url"></label>\r\n    <input ng-model="ctrl.model.config.url" required />\r\n</md-input-container>\r\n<md-input-container class="md-block">\r\n    <label translate="apiKey"></label>\r\n    <input ng-model="ctrl.model.config.apiKey" required />\r\n</md-input-container>\r\n\r\n<!-- \r\n    If there is an ID the user is editing\r\n    Allow the user to select a profile (currently not used)\r\n    Also expose the webcam and snapshot (currently not used) urls so the user can resolve potential parse errors. \r\n-->\r\n<md-input-container class="md-block" ng-if="ctrl.model.id">\r\n    <label translate="profile"></label>\r\n    <md-select ng-model="ctrl.model.config.profile" ng-model-options="{trackBy: \'$value.id\'}" required title="{{ \'profileTitle\' | translate }}">\r\n        <md-option ng-repeat="profile in ctrl.model.config.availableProfiles" ng-value="profile">\r\n            {{ profile.name }}\r\n        </md-option>\r\n    </md-select>\r\n</md-input-container>\r\n\r\n<md-input-container class="md-block" ng-if="ctrl.model.id">\r\n    <label translate="webcamUrl"></label>\r\n    <input ng-model="ctrl.model.config.webCamUrl" required />\r\n</md-input-container>\r\n\r\n<md-input-container class="md-block" ng-if="ctrl.model.id">\r\n    <label translate="snapshotUrl"></label>\r\n    <input ng-model="ctrl.model.config.snapshotUrl" required />\r\n</md-input-container>');
$templateCache.put('views/configuration/RepRap.html','<md-input-container class="md-block">\r\n    <label translate="url"></label>\r\n    <input ng-model="ctrl.model.config.url" required />\r\n</md-input-container>\r\n\r\n<md-input-container class="md-block">\r\n    <label translate="webcamUrl"></label>\r\n    <input ng-model="ctrl.model.config.webCamUrl" required />\r\n</md-input-container>\r\n\r\n<md-input-container class="md-block">\r\n    <label translate="snapshotUrl"></label>\r\n    <input ng-model="ctrl.model.config.snapshotUrl" required />\r\n</md-input-container>\r\n\r\n<!--<md-input-container ng-if="ctrl.requiresRepRapPassword" class="md-block">\r\n    <label translate="password"></label>\r\n    <input type="password" ng-model="ctrl.model.config.password" required />\r\n</md-input-container>\r\n<md-input-container class="md-block">\r\n    <md-switch class="md-primary" ng-model="ctrl.requiresRepRapPassword">\r\n        <span translate="requiresPassword"></span>\r\n    </md-switch>\r\n</md-input-container>-->\r\n');}]);