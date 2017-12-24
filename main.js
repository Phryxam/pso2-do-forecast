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
        ['Shironnia Exploration(Recommended)', '2016-09-07', [16]],
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

        ['ナヴ・ラッピー捕獲任務(N)', '2016-09-07', [12, 60, 12, 9]],
        ['キャタドラン(N)', '2016-03-10', [32, 61]],
        ['貴重物資運搬計画:砂漠(N)', '2016-05-01', [21, 17, 19, 12, 24]],
        ['アンジャドゥリリ討伐(N)', '2016-03-11', [23, 12, 21, 24, 13]],
        ['レオマドゥラード討伐(N)', '2016-04-19', [26, 27, 4, 21, 15]],
        ['レオマドゥラード(N)', '2016-07-01', [16, 77]],
        ['ギグル・グンネガム(N)', '2016-01-30', [64, 29]],
        ['ネプト・キャサドーラ(N)', '2016-02-09', [44, 49]],
        ['15式戦車(N)', '2016-02-20', [12, 12, 69]],
        ['トレイン・ギドラン(N)', '2016-03-27', [12, 12, 69]],
        ['白ノ領域探索(N)', '2016-02-01', [3, 24, 24, 20, 4, 8, 10]],
        ['浮上施設探索(N)', '2016-04-22', [21, 5, 7, 26, 10, 12, 12]],
        ['東京探索(N)', '2016-01-31', [7, 2, 12, 12, 4, 8, 4, 8, 4, 8, 4, 8, 4, 3, 5]],
        ['ナベリウス上級走破(N)', '2016-05-09', [36, 36, 21]],
        ['アムドゥスキア走破(N)', '2016-05-27', [6, 36, 51]],
        ['リリーパ走破(N)', '2016-04-30', [21, 36, 36]],

        ['ロックベア(H)', '2016-09-21', [37, 56]],
        ['キャタドラン討伐(H)', '2016-10-29', [32, 27, 34]],
        ['救難信号調査(H)', '2016-02-08', [20, 7, 20, 7, 39]],
        ['巨大変形機甲種撃破(H)', '2016-07-31', [9, 24, 9, 15, 12, 24]],
        ['キャタドランサ討伐(H)', '2016-02-07', [7, 23, 7, 20, 7, 14, 15]],
        ['オルグブラン討伐(H)', '2016-02-13', [27, 7, 3, 24, 14, 18]],
        ['移動要塞型機甲種撃破(H)', '2016-04-13', [7, 11, 18, 7, 18, 32]],
        ['コドッタ・イーデッタ討伐(H)', '2016-09-29', [20, 7, 27, 9, 23, 7]],
        ['コドッタ・イーデッタ(H)', '2016-08-04', [58, 35]],
        ['グアル・ジグモルデ(H)', '2016-08-28', [51, 42]],
        ['デビルズトレーラー(H)', '2016-09-09', [58, 35]],
        ['ベガス・イリュージア(H)', '2016-09-18', [39, 54]],
        ['黒ノ領域探索(H)', '2016-08-15', [9, 11, 30, 16, 20, 7]],
        ['ラスベガス探索(H)', '2016-09-01', [4, 11, 24, 12, 16, 12, 5, 9]],
        ['ナベリウス初級走破(H)', '2016-05-13', [60, 33]],
        ['ナベリウス上級走破(H)', '2016-03-05', [60, 33]],
        ['アムドゥスキア走破(H)', '2016-05-02', [59, 34]],
        ['リリーパ走破(H)', '2016-04-22', [79, 14]],
        ['龍祭壇突破(H)', '2016-05-25', [24, 69]],

        ['デ・マルモス(VH)', '2016-04-07', [93]],
        ['ゼッシュレイダ(VH)', '2016-03-18', [93]],
        ['ゴロンゾラン(VH)', '2016-08-09', [48, 45]],
        ['ドラゴン・エクス(VH)', '2016-09-10', [18, 18, 57]],
        ['Volcanic Cave Exploration(VH)', '2016-05-09', [5, 46, 3, 39]],
        ['アークス捜索任務:凍土(VH)', '2016-05-06', [6, 54, 33]],
        ['Floating Continent Exploration(VH)', '2016-02-12', [5, 49, 14, 25]],
        ['環境汚染装置破壊(VH)', '2016-02-15', [5, 49, 14, 25]],
        ['Runs Exploration(VH)', '2016-02-21', [2, 49, 18, 24]],
        ['龍祭壇平定任務(VH)', '2016-06-16', [12, 42, 28, 11]],
        ['龍祭壇探索(VH)', '2016-09-09', [11, 6, 48, 28]],
        ['オルグブラン(VH)', '2016-02-17', [48, 23, 22]],
        ['バル・ロドス(VH)', '2016-01-30', [3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]],
        ['ヴァーダーソーマ(VH)', '2016-02-22', [18, 75]],
        ['デコル・マリューダ(VH)', '2016-02-13', [63, 13, 17]],
        ['15式戦車(VH)', '2016-02-10', [18, 18, 18, 18, 21]],
        ['デビルズトレーラー(VH)', '2016-09-08', [11, 31, 12, 8, 31]],
        ['海岸地域生態調査(VH)', '2016-02-24', [51, 14, 22, 6]],
        ['Coast Exploration(VH)', '2016-01-30', [28, 2, 42, 7, 14]],
        ['機甲種性能調査:採掘場跡(VH)', '2016-07-10', [13, 44, 7, 29]],
        ['採掘場跡探索(VH)', '2016-07-07', [19, 44, 19, 11]],
        ['海底地域生態調査(VH)', '2016-03-13', [9, 36, 36, 12]],
        ['海底探索(VH)', '2016-01-31', [41, 4, 14, 34]],
        ['ナベリウス上級走破(VH)', '2016-05-29', [22, 14, 57]],
        ['アムドゥスキア走破(VH)', '2016-04-26', [21, 36, 36]],
        ['リリーパ走破(VH)', '2016-05-05', [36,36, 21]],

        ['ロックベア(SH)', '2016-02-05', [54, 39]],
        ['ヴォル・ドラゴン(SH)', '2016-04-03', [26, 67]],
        ['グワナーダ(SH)', '2016-08-18', [27, 66]],
        ['スノウバンサー(SH)', '2016-02-18', [54, 39]],
        ['ビッグヴァーダー(SH)', '2016-02-23', [54, 39]],
        ['クォーツ・ドラゴン(SH)', '2016-02-27', [54, 39]],
        ['ゼッシュレイダ(SH)', '2016-03-03', [54, 39]],
        ['ドラゴン・エクス(SH)', '2016-09-09', [93]],
        ['バル・ロドス(SH)', '2016-08-06', [93]],
        ['ブリュー・リンガーダ(SH)', '2016-02-06', [39, 54]],
        ['ビオル・メデューナ(SH)', '2016-03-04', [17, 76]],
        ['トレイン・ギドラン(SH)', '2016-06-26', [29, 25, 39]],
        ['ベガス・イリュージア(SH)', '2016-09-11', [30, 22, 8, 33]],
        ['Forest Exploration(SH)', '2014-09-27', [6, 3, 24, 27, 33]],
        ['Volcanic Cave Exploration(SH)', '2014-08-28', [48, 33, 3, 3, 6]],
        ['Desert Exploration(SH)', '2014-09-03', [3, 3, 15, 15, 57]],
        ['Tundra Exploration(SH)', '2014-08-31', [12, 6, 30, 15, 6, 24]],
        ['Tunnels Exploration(SH)', '2014-09-21', [21, 9, 6, 18, 39]],
        ['Floating Continent Exploration(SH)', '2014-09-15', [15, 24, 12, 6, 36]],
        ['Ruins Exploration(SH)', '2016-01-31', [15, 15, 24, 18, 21]],
        ['龍祭壇探索(SH)', '2016-03-04', [15, 9, 3, 21, 45]],
        ['Coast Exploration(SH)', '2016-01-28', [12, 3, 6, 9, 18, 45]],
        ['採掘場跡探索(SH)', '2016-02-21', [15, 33, 6, 3, 36]],
        ['デコル・マリューダ討伐(SH)', '2016-02-24', [15, 24, 21, 3, 30]],
        ['海底探索(SH)', '2016-02-03', [3, 36, 9, 15, 30]]
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
                        dc = new DateCalculator(data[1], data[2]);
                    for (; dc.date() < begin; dc.next()) {
                    }
                    for (; dc.date() < end; dc.next()) {
                        results.push(dc.toDateString(), order);
                    }
                });
                var out = this._out;
                out.clear();
                results.forEach(function (date, orders) {
                    out.println(date + ':');
                    orders.forEach(function (order) {
                        out.println('  ' + order);
                    });
                });
            }
        };

        return klass;
    })();

    new Forecast($('#forecast'));
})();
