/**
 * Module : Kero yearmonth adapter
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-10 14:11:50
 */

import {
    YearMonth
} from 'tinper-neoui/src/neoui-yearmonth';


var YearMonthAdapter = u.BaseAdapter.extend({
    init: function() {
        var self = this;
        this.validType = 'yearmonth';
        this.format = this.getOption('format');
        this.comp = new YearMonth({
            el: this.element,
            showFix: this.options.showFix,
            format: this.format
        });


        this.comp.on('valueChange', function(event) {
            self.slice = true;
            self.dataModel.setValue(self.field, event.value);
            self.slice = false;
        });


    },
    modelValueChange: function(value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function(enable) {}
});

if (u.compMgr)
    u.compMgr.addDataAdapter({
        adapter: YearMonthAdapter,
        name: 'u-yearmonth'
    });


export {
    YearMonthAdapter
};
