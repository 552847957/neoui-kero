/**
 * Module : Kero password
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-08-09 19:19:33
 */

import {StringAdapter} from './keroa-string';
import {getJSObject} from 'neoui-sparrow/js/util';
import {env} from 'neoui-sparrow/js/env';
import {on} from 'neoui-sparrow/js/event';
import {compMgr} from 'neoui-sparrow/js/compMgr';



/**
 * 密码控件
 */
var PassWordAdapter = StringAdapter.extend({
    init: function () {
        PassWordAdapter.superclass.init.apply(this);
        var oThis = this;
        if(env.isIE8){
            var outStr = this.element.outerHTML;
            var l = outStr.length;
            outStr = outStr.substring(0,l-1) + ' type="password"' + outStr.substring(l-1);
            var newEle = document.createElement(outStr);
            var parent = this.element.parentNode;
            parent.insertBefore(newEle,this.element.nextSibling);
            parent.removeChild(this.element);
            this.element = newEle;
        }else{
            this.element.type = "password";
        }
        oThis.element.title = '';
        this._element = this.element.parentNode;
        this.span = this._element.querySelector("span");
        if(env.isIE8){
            this.span.style.display = 'none';
        }
        if(this.span){
            on(this.span,'click',function(){
                if(oThis.element.type == 'password'){
                    oThis.element.type = 'text';
                }else{
                    oThis.element.type = 'password';
                }
            });
        }
        
    },
    setShowValue: function (showValue) {
        this.showValue = showValue;
        this.element.value = showValue;
        this.element.title = '';
    },
});
compMgr.addDataAdapter({
	adapter: PassWordAdapter,
	name: 'password'
});

export {PassWordAdapter};