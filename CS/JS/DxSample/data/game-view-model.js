(function () {
    DxSample.GameViewModel = function (data) {
        var self = this;

        self.name = ko.observable();
        self.os = ko.observable();

        if (data)
            self.fromJS(data);
    };

    $.extend(DxSample.GameViewModel.prototype, {
        toJS: function () {
            return {
                name: this.name(),
                os: this.os()
            };
        },

        fromJS: function (data) {
            if (data) {
                this.name(data.name);
                this.os(data.os);
            }
        }
    });
})();