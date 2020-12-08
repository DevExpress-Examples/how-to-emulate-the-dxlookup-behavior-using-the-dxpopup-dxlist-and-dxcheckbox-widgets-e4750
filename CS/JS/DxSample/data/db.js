(function() {
    var ArrayStore = DevExpress.data.ArrayStore;

    DxSample.db = {
        games: new ArrayStore([
            {
                name: 'South Park: The Stick of Truth',
                os: 'Win98, Win2000, WinNT, WinXP, Vista'
            },
            {
                name: 'Tomb Raider',
                os: 'Vista'
            },
            {
                name: 'BioShok Infinite',
                os: 'WinXP, Vista'
            }
        ]),

        os: new ArrayStore([
            { name: 'Win98' },
            { name: 'Win200' },
            { name: 'WinNT' },
            { name: 'WinXP' },
            { name: 'Vista' }
        ])
    };
})();