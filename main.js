(function () {
    'use strict';

    var ORDER_DATA = [
        ['Forest Exploration(Recommended)', '2016-08-27', [16]],
        ['Volcanic Cave Exploration(Recommended)', '2016-08-28', [16]],
        ['Desert Exploration(Recommended)', '2016-08-29', [16]],
        ['Tundra Exploration(Recommended)', '2016-08-30', [16]],
        ['Tunnels Exploration(Recommended)', '2016-08-31', [16]],
        ['Floating Continent Exploration(Recommended)', '2016-09-01', [16]],
        ['Runs Exploration(Recommended)', '2016-09-02', [16]],
        ['Sanctum Exploration(Recommended)', '2016-09-03', [16]],
        ['Coast Exploration(Recommended)', '2016-09-04', [16]],
        ['Quarry Exploration(Recommended)', '2016-09-05', [16]],
        ['Seabed Exploration(Recommended)', '2016-09-06', [16]],
        ['Shironia Exploration(Recommended)', '2016-09-07', [16]],
        ['Facility Exploration(Recommended)', '2016-09-08', [16]],
        ['Kuron Exploration(Recommended)', '2016-09-09', [16]],
        ['Tokyo Exploration(Recommended)', '2016-08-25', [16]],
        ['Las Vegas Exploration(Recommended)', '2016-08-26', [16]],
        ['Nab Rappy Capture I(Recommended)', '2016-04-21', [21]],
        ['Wolghada Extermination(Recommended)', '2016-04-21', [21]],
        ['Berserk Dragon Suppression(Recommended)', '2016-04-22', [21]],
        ['Kuronite Suppression(Recommended)', '2016-04-22', [21]],
        ['Subdue Caterdransa(Recommended)', '2016-04-23', [21]],
        ['Facility Ecological Survey(Recommended)', '2016-04-23', [21]],
        ['ARKS Search: Tundra(Recommended)', '2016-04-24', [21]],
        ['Subdue Sol Dirandal(Recommended)', '2016-04-24', [21]],
        ['Ruins Infestation Survey(Recommended)', '2016-04-25', [21]],
        ['Wopal Rescue Team(Recommended)', '2016-04-25', [21]],,
        ['Goronzoran Suppression(Recommended)', '2016-04-26', [21]],
        ['Phantom Repulsion: Tokyo(Recommended)', '2016-04-26', [21]],
        ['Mech Power Survey: Tunnels(Recommended)', '2016-04-27', [21]],
        ['Anjhadu-lili Demolition(Recommended)', '2016-04-27', [21]],
        ['Cargo Recovery Survey(Recommended)', '2016-04-28', [21]],
        ['Org Blan Subjugation(Recommended)', '2016-04-28', [21]],
        ['Rare Ore Excavation(Recommended)', '2016-04-29', [21]],
        ['Mobile Fortress Takedown(Recommended)', '2016-04-29', [21]],
        ['Subdue Decol Malluda(Recommended)', '2016-04-30', [21]],
        ['Kuronite Investigation(Recommended)', '2016-04-30', [21]],
        ['Tundra Regional Survey(Recommended)', '2016-05-01', [21]],
        ['Subdue Rheo Madulluard(Recommended)', '2016-05-01', [21]],
        ['Cargo Recovery: Desert(Recommended)', '2016-05-02', [21]],
        ['Codotta Idetta Subjugation(Recommended)', '2016-05-02', [21]],
        ['Dagan Extermination: Forest(Recommended)', '2016-05-03', [21]],
        ['Subdue Train Ghidoran(Recommended)', '2016-05-03', [21]],
        ['Kartorgot Extermination(Recommended)', '2016-05-04', [21]],
        ['Mech Power Survey: Desert(Recommended)', '2016-05-04', [21]],
        ['Subdue Za Oodan(Recommended)', '2016-05-05', [21]],
        ['Sanctum Supression(Recommended)', '2016-05-05', [21]],
        ['Subdue Caterdran(Recommended)', '2016-05-06', [21]],
        ['Lilipan Settlement Defense(Recommended)', '2016-05-06', [21]],
        ['Specimen Collection: Skyscape(Recommended)', '2016-05-07', [21]],
        ['Coastal Ecological Survey(Recommended)', '2016-05-07', [21]],
        ['Subdue Fangulf(Recommended)', '2016-05-08', [21]],
        ['De Malmoth Supression(Recommended)', '2016-05-08', [21]],
        ['Dragonkin Ecological Survey(Recommended)', '2016-05-09', [21]],
        ['Mech Power Survey: Quarry(Recommended)', '2016-05-09', [21]],
        ['Polluter Destruction(Recommended)', '2016-05-10', [21]],
        ['Coastal Ecological Survey(Recommended)', '2016-05-10', [21]],
        ['Transformer Takedown(Recommended)', '2016-05-11', [21]],
        ['Seabed Ecological Survey(Recommended)', '2016-05-11', [21]],

        ['Nab Rappy Capture(N)', '2017-08-24', [12, 9, 12, 15, 27, 18],0,0],
        ['Subdue Caterdran(N)', '2017-08-13', [931],0,0],
        ['Cargo Recovery: Desert(N)', '2017-08-09', [21, 17, 19, 12, 14, 10],0,0],
        ['Anjhadu-lili Demolition(N)', '2017-08-14', [24, 13, 9, 14, 12, 18, 3],0,0],
        ['Subdue Rheo Malludard(N)', '2017-08-18', [5, 27, 4, 14, 7, 15, 21],0,0],
        ['Rheo Malludard(N)', '2017-07-24', [39, 54],0,0],
        ['Gigur Gunnegam(N)', '2017-08-11', [39, 54],0,0],
        ['Nepto Cassadora(N)', '2017-08-31', [54, 39],0,0],
        ['Type-15 Tank(N)', '2017-08-10', [39, 54],0,0],
        ['Train Ghidoran(N)', '2017-08-14', [54, 39],0,0],
        ['Shironia Exploration(N)', '2017-06-07', [24, 20, 4, 8, 10, 3, 24],0,0],
        ['Facility Exploration(N)', '2016-04-22', [21, 5, 7, 26, 10, 12, 12],0,0],
        ['Tokyo Exploration(N)', '2017-08-20', [12, 12, 4, 8, 24, 16, 17],0,0],
        ['Naberius Advanced TA(N)', '2016-05-09', [36, 36, 21],0,0],
        ['Amduscia TA(N)', '2016-05-27', [6, 36, 51],0,0],
        ['Lilipa TA(N)', '2016-04-30', [21, 36, 36],0,0],

        ['Rockbear(H)', '2016-09-21', [37, 56],0,0],
        ['Subdue Caterdran(H)', '2017-08-25', [11, 27, 4, 3, 48],0,0],
        ['Rescue Signal Survey(H)', '2017-08-19', [27, 20, 7, 17, 22],0,0],
        ['Transformer Takedown(H)', '2016-07-31', [9, 24, 9, 15, 12, 24],0,0],
        ['Subdue Caterdransa(H)', '2016-02-07', [7, 23, 7, 20, 7, 14, 15],0,0],
        ['Org Blan Subjugation(H)', '2016-02-13', [27, 7, 3, 24, 14, 18],0,0],
        ['Mobile Fortress Destruction(H)', '2016-04-13', [7, 11, 18, 7, 18, 32],0,0],
        ['Codda Idetta Subjugation(H)', '2016-09-29', [20, 7, 27, 9, 23, 7],0,0],
        ['Codda Idetta(H)', '2016-08-04', [58, 35],0,0],
        ['Guar Zimolde(H)', '2016-08-28', [51, 42],0,0],
        ['Devils Trailer(H)', '2016-09-09', [58, 35],0,0],
        ['Vegas Illusia(H)', '2016-09-18', [39, 54],0,0],
        ['Kuronia Exploration(H)', '2016-08-15', [9, 11, 30, 16, 20, 7],0,0],
        ['Las Vegas Exploration(H)', '2017-08-13', [17, 9, 4, 11, 24, 28],0,0],
        ['Naberius Beginner TA(H)', '2016-05-13', [60, 33],0,0],
        ['Naberius Advanced TA(H)', '2016-03-05', [60, 33],0,0],
        ['Amduscia TA(H)', '2016-05-02', [59, 34],0,0],
        ['Lilipa TA(H)', '2016-04-22', [79, 14],0,0],
        ['Sanctum TA(H)', '2016-05-25', [24, 69],0,0],

        ['De Malmoth(VH)', '2016-04-07', [93],0,0],
        ['Zeshryada(VH)', '2016-03-18', [93],0,0],
        ['Goronzoran(VH)', '2017-08-16', [48, 29, 16],0,0],
        ['Dragon Ex(VH)', '2016-09-10', [18, 18, 57],0,0],
        ['Volcanic Cave Exploration(VH)', '2016-05-09', [5, 46, 3, 39],0,0],
        ['ARKS Rescue Mission: Tundra(VH)', '2016-05-06', [6, 54, 33],0,0],
        ['Floating Continent Exploration(VH)', '2016-02-12', [5, 49, 14, 25],0,0],
        ['Polluter Destruction(VH)', '2016-02-15', [5, 49, 14, 25],0,0],
        ['Ruins Exploration(VH)', '2016-02-21', [2, 49, 18, 24],0,0],
        ['Dragon Suppression Survey(VH)', '2016-06-16', [12, 42, 28, 11],0,0],
        ['Sanctum Exploration(VH)', '2016-09-09', [11, 6, 48, 28],0,0],
        ['Org Blan(VH)', '2016-02-17', [48, 23, 22],0,0],
        ['Bal Rodos(VH)', '2016-01-30', [3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],0,0],
        ['Vader Soma(VH)', '2016-02-22', [18, 75],0,0],
        ['Decol Malluda(VH)', '2017-07-25', [30, 33, 30],0,0],
        ['Type-15 Tank(VH)', '2017-08-21', [18, 36, 39],0,0],
        ['Devils Trailer(VH)', '2016-09-08', [11, 31, 12, 8, 31],0,0],
        ['Coast Ecological Survey(VH)', '2016-02-24', [51, 14, 22, 6],0,0],
        ['Coast Exploration(VH)', '2016-01-30', [28, 2, 42, 7, 14],0,0],
        ['Mech Power Survey: Quarry(VH)', '2016-07-10', [13, 44, 7, 29],0,0],
        ['Quarry Exploration(VH)', '2016-07-07', [19, 44, 19, 11],0,0],
        ['Seabed Ecological Survey(VH)', '2016-03-13', [9, 36, 36, 12],0,0],
        ['Seabed Exploration(VH)', '2016-01-31', [41, 4, 14, 34],0,0],
        ['Naberius Advanced TA(VH)', '2016-05-29', [22, 14, 57],0,0],
        ['Amduscia TA(VH)', '2016-04-26', [21, 36, 36],0,0],
        ['Lilipa TA(VH)', '2016-05-05', [36,36, 21],0,0],

        ['Rockbear(SH)', '2016-02-05', [54, 39],0,0],
        ['Vol Dragon(SH)', '2016-04-03', [26, 67],0,0],
        ['Gwanahada(SH)', '2016-08-18', [27, 66],0,0],
        ['Snow Banther(SH)', '2016-02-18', [54, 39],0,0],
        ['Big Vardha(SH)', '2016-02-23', [54, 39],0,0],
        ['Quartz Dragon(SH)', '2016-02-27', [54, 39],0,0],
        ['Zeshrayda(SH)', '2016-03-03', [54, 39],0,0],
        ['Dragon Ex(SH)', '2016-09-09', [93],0,0],
        ['Bal Rodos(SH)', '2017-08-13', [36, 57],0,0],
        ['Blu Ringahda(SH)', '2016-02-06', [39, 54],0,0],
        ['Biol Meduna(SH)', '2016-03-04', [17, 76],0,0],
        ['Train Ghidoran(SH)', '2016-06-26', [29, 25, 39],0,0],
        ['Vegas Illusia(SH)', '2017-08-16', [63, 30],0,0],
        ['Forest Exploration(SH)', '2014-09-27', [6, 3, 24, 27, 33],0,0],
        ['Volcanic Cave Exploration(SH)', '2014-08-28', [48, 33, 3, 3, 6],0,0],
        ['Desert Exploration(SH)', '2014-09-03', [3, 3, 15, 15, 57],0,0],
        ['Tundra Exploration(SH)', '2014-08-31', [12, 6, 30, 15, 6, 24],0,0],
        ['Tunnels Exploration(SH)', '2014-09-21', [21, 9, 6, 18, 39],0,0],
        ['Floating Continent Exploration(SH)', '2014-09-15', [15, 24, 12, 6, 36],0,0],
        ['Ruins Exploration(SH)', '2016-01-31', [15, 15, 24, 18, 21],0,0],
        ['Sanctum Exploration(SH)', '2016-03-04', [15, 9, 3, 21, 45],0,0],
        ['Coast Exploration(SH)', '2016-01-28', [12, 3, 6, 9, 18, 45],0,0],
        ['Quarry Exploration(SH)', '2016-02-21', [15, 33, 6, 3, 36],0,0],
        ['Subdue Decol Malluda(SH)', '2016-02-24', [15, 24, 21, 3, 30],0,0],
        ['Seabed Exploration(SH)', '2016-02-03', [3, 36, 9, 15, 30],0,0]
    ];

    var CycleIter = (function () {
        var klass = function (seq) {
            this._seq = [].concat(seq);
            this._idx = 0;
            return this;
        };

        klass.prototype = {
            next: function () {
                var seq = this._seq,
                    idx = this._idx,
                    ret = seq[idx];
                this._idx = ++idx < seq.length ? idx : 0;
                return ret;
            }
        };

        return klass;
    }());

    var DateUtil = (function () {
        var _copy = function (date) {
            return new Date(date.valueOf());
        };

        var _trimTime = function (date) {
            date = _copy(date);
            date.setHours(0, 0, 0, 0);
            return date;
        };

        var _addDays = function (date, days) {
            date = _copy(date);
            date.setDate(date.getDate() + days);
            return date;
        };

        return {
            copy: _copy,
            trimTime: _trimTime,
            addDays: _addDays
        };
    }());

    var DateCalculator = (function () {
        var klass = function (start, freqs) {
            this._date = DateUtil.trimTime(start);
            this._freqs = new CycleIter(freqs);
            return this;
        };

        var _i2s = function (num, leng) {
            var num = num.toString(),
                digits = [num];
            for (var i = num.length; i < leng; ++i) {
                digits.unshift('0');
            }
            return digits.join('');
        };

        klass.prototype = {
            date: function () {return DateUtil.copy(this._date)},
            toDateString: function () {
                var date = this._date;
                return [_i2s(date.getFullYear(), 4),
                        _i2s(date.getMonth() + 1, 2),
                        _i2s(date.getDate(), 2)
                       ].join('-');
            },
            next: function () {
                this._date = DateUtil.addDays(this._date, this._freqs.next());
                return this;
            }
        };

        return klass;
    }());

    var OrderResults = (function () {
        var klass = function (begin, end) {
            var result = {};
            if (begin && end) {
                var dc = new DateCalculator(begin, [1]);
                for (; dc.date() < end; dc.next()) {
                    result[dc.toDateString()] = [];
                }
            }
            this._result = result;
            return this;
        };

        klass.prototype = {
            push: function (date, order) {
                var result = this._result,
                    orders = result[date];
                if (!orders) {
                    orders = [];
                    result[date] = orders;
                }
                orders.push(order);
                return this;
            },
            forEach: function (callback) {
                var result = this._result;
                Object.keys(result).sort().forEach(function (date) {
                    callback(date, result[date]);
                });
                return this;
            }
        };

        return klass;
    }());

    var TextConsole = (function () {
        var klass = function ($this) {
            this._$ = $this;
            return this;
        };

        klass.prototype = {
            clear: function () {this._$.text('')},
            print: function (s) {this._$.text(this._$.text() + s)},
            println: function (s) {this.print(s + '\n')}
        };

        return klass;
    }());

    var Forecast = (function () {
        var _FORECAST_DAYS = 10;

        var klass = function ($this) {
            var self = this;
            ['forward', 'backward'].forEach(function (name) {
                var $button = $this.find('.forecast-' + name),
                    handler = self['on' + _capitalize(name)];
                $button.click(function () {handler.call(self)});
                $button.focus(function () {$(this).blur()});
            });
            this._out = new TextConsole($this.find('.forecast-output'));
            this._base = DateUtil.trimTime(new Date());
            this._offset = 0;
            this.update();
            return this;
        };

        var _capitalize = function (s) {
            return s.replace(/\b[a-z]/g, function (s) {
                return s.toUpperCase();
            });
        };

        klass.prototype = {
            onForward: function () {this.next(_FORECAST_DAYS)},
            onBackward: function () {this.next(-_FORECAST_DAYS)},
            next: function (days) {
                this._offset += days;
                this.update();
            },
            update: function () {
                var begin = DateUtil.addDays(this._base, this._offset),
                    end = DateUtil.addDays(begin, _FORECAST_DAYS),
                    results = new OrderResults(begin, end);
                ORDER_DATA.forEach(function (data) {
                    var order = data[0],
                        dc = new DateCalculator(data[1], data[2]),
                        meseta = data[3],
                        exp = data[4];
                    for (; dc.date() < begin; dc.next()) {
                    }
                    for (; dc.date() < end; dc.next()) {
                        results.push(dc.toDateString(), order, meseta, exp);
                    }
                });
                var out = this._out;
                out.clear();
                results.forEach(function (date, orders) {
                    out.println(date + ':');
                    orders.forEach(function (order,idx) {
                        out.println('  ' + order);
                    });
                });
            }
        };

        return klass;
    })();

    new Forecast($('#forecast'));
})();
