DxSample.Index = function(params) {
    var viewModel = {
        gamesDataSource: {
            store: DxSample.db.games,

            map: function (item) {
                return new DxSample.GameViewModel(item);
            }
        },

        osDataSource: new DevExpress.data.DataSource({
            store: DxSample.db.os,
            map: function (item) {
                return new DxSample.OperatingSystemViewModel(item);
            }
        }),

        currentGame: undefined,

        changeOs: function () {
            viewModel.currentGame = this;
            var os = viewModel.currentGame.os().split(', ');
            $.each(viewModel.osDataSource.items(), function (index, item) {
                item.selected(os.indexOf(item.name()) >= 0);
            });
            $('#osPopup').data('dxPopup').show();
        },

        closeOsPopup: function () {
            viewModel.currentGame.os($.map(viewModel.osDataSource.items(), function (item) {
                return item.selected() ? item.name() : undefined;
            }).join(', '));
            $('#osPopup').data('dxPopup').hide();
        }
    };

    return viewModel;
};