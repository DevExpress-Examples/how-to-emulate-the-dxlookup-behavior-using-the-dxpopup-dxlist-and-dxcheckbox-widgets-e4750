(function () {
    DxSample.OperatingSystemViewModel = function (data) {
        var self = this;

        self.name = ko.observable();
        self.selected = ko.observable(false);

        if (data)
            self.fromJS(data);
    };

    $.extend(DxSample.OperatingSystemViewModel.prototype, {
        toJS: function () {
            return { name: this.name() };
        },

        fromJS: function (data) {
            if (data)
                this.name(data.name);
        }
    });
})();