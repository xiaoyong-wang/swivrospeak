(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(18),s=n.n(a),o=n(91),i=n.n(o),c=n(97),r=n.n(c),l=n(95),u=n(96),d=n(92),p=n(99),h=n(103);class m extends i.a.PureComponent{constructor(...e){super(...e),s()(this,"onGoToSettingsClick",()=>{this.props.onFinished(),u.a.fire(h.a.ViewUserSettings)}),s()(this,"onSetupClick",()=>{this.props.onFinished(),p.a.createTrackedDialogAsync("Key Backup","Key Backup",n.e(5).then(n.bind(null,719)),null,null,!1,!0)})}render(){const e=l.getComponent("views.dialogs.BaseDialog"),t=l.getComponent("views.elements.DialogButtons"),n=i.a.createElement("span",{className:"mx_KeyBackupFailedDialog_title"},Object(d.a)("Recovery Method Removed"));return i.a.createElement(e,{className:"mx_KeyBackupFailedDialog",onFinished:this.props.onFinished,title:n},i.a.createElement("div",null,i.a.createElement("p",null,Object(d.a)("This session has detected that your Security Phrase and key for Secure Messages have been removed.")),i.a.createElement("p",null,Object(d.a)("If you did this accidentally, you can setup Secure Messages on this session which will re-encrypt this session's message history with a new recovery method.")),i.a.createElement("p",{className:"warning"},Object(d.a)("If you didn't remove the recovery method, an attacker may be trying to access your account. Change your account password and set a new recovery method immediately in Settings.")),i.a.createElement(t,{primaryButton:Object(d.a)("Set up Secure Messages"),onPrimaryButtonClick:this.onSetupClick,cancelButton:Object(d.a)("Go to Settings"),onCancel:this.onGoToSettingsClick})))}}s()(m,"propTypes",{onFinished:r.a.func.isRequired})}}]);
//# sourceMappingURL=32.js.map