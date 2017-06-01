import * as pages from "tns-core-modules/ui/page";
import * as textField from "tns-core-modules/ui/text-field";
import * as observable from "tns-core-modules/data/observable";

var context: any;
var closeCallback: Function;

var page: pages.Page;
var usernameTextField: textField.TextField;
var passwordTextField: textField.TextField;

export function onShownModally(args: pages.ShownModallyData) {
    console.log("login-page.onShownModally, context: " + args.context);
    context = args.context;
    closeCallback = args.closeCallback;
}

export function onLoaded(args: observable.EventData) {
    console.log("login-page.onLoaded");
    page = <pages.Page>args.object;
}

export function onUnloaded() {
    console.log("login-page.onUnloaded");
}

export function onLoginButtonTap() {
    console.log("login-page.onLoginButtonTap");
    closeCallback();
}