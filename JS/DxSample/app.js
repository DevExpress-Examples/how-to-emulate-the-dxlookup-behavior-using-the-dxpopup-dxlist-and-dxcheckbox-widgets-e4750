window.DxSample = window.DxSample || {};

$(function() {
    app = new DevExpress.framework.html.HtmlApplication({
        ns: DxSample,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: DxSample.config.defaultLayout,
        navigation: DxSample.config.navigation
    });
    app.router.register(":view/:id", { view: "Index", id: undefined });
});
