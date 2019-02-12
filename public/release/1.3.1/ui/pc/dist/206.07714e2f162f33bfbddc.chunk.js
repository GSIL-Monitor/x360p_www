webpackJsonp([206],{1272:function(e,t,n){"use strict";var i=n(210),r=n.n(i),s=n(54),o=n.n(s),a=n(959),l=n(625),c=n(1),d=0;t.a={name:"XTree",props:{selIds:{type:[Array,String,Number]},data:{type:Array},size:{type:String,validator:function(e){return["large","small"].indexOf(e)>-1}},showCheckbox:{type:Boolean,default:!1},wholeRow:{type:Boolean,default:!1},noDots:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},allowBatch:{type:Boolean,default:!1},textFieldName:{type:String,default:"text"},valueFieldName:{type:String,default:"value"},async:{type:Function},loadingText:{type:String,default:"Loading..."},draggable:{type:Boolean,default:!1},klass:String},data:function(){return{draggedItem:null}},computed:{classes:function(){return[{tree:!0},{"tree-default":!this.size},o()({},"tree-default-"+this.size,!!this.size),{"tree-checkbox-selection":!!this.showCheckbox},o()({},this.klass,!!this.klass)]},containerClasses:function(){return[{"tree-container-ul":!0},{"tree-children":!0},{"tree-wholerow-ul":!!this.wholeRow},{"tree-no-dots":!!this.noDots}]},sizeHight:function(){switch(this.size){case"large":return 32;case"small":return 18;default:return 24}}},methods:{initializeData:function(e){if(e&&e.length>0)for(var t=0,n=e.length;t<n;t++){var i=this.initializeDataItem(e[t]);e[t]=i,void 0!==e[t].children&&e[t].children.length>0&&this.initializeData(e[t].children)}},initializeDataItem:function(e){function t(e,t,n){this.id=e.id||d++,this.text=e[t]||"",this.value=e[n]||e[t],this.icon=e.icon||"",this.color=e.color||"",this.opened=e.opened||!1,this.selected=e.selected||!1,this.selected_part=e.selected_part||!1,this.disabled=e.disabled||!1,this.loading=e.loading||!1,this.children=e.children||[],this._data=c.b.copy(e)}return new t(e,this.textFieldName,this.valueFieldName)},initializeLoading:function(){var e={};return e[this.textFieldName]=this.loadingText,e.disabled=!0,e.loading=!0,this.initializeDataItem(e)},handleRecursionNodeChilds:function(e,t){if(e.$children&&e.$children.length>0){var n=!0,i=!1,s=void 0;try{for(var o,a=r()(e.$children);!(n=(o=a.next()).done);n=!0){var l=o.value;l.disabled||(t(l),this.handleRecursionNodeChilds(l,t))}}catch(e){i=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw s}}}},handleRecursionNodeParents:function(e){var t=e.$parent;if(t.$refs.group){var n=t.$children.filter(function(e){return e.data.selected}).length,i=t.$children.filter(function(e){return e.data.selected||e.data.selected_part}).length,r=t.$children.length;t.data.selected=n==r,t.data.selected_part=n<r&&i>0,this.handleRecursionNodeParents(t)}},onItemClick:function(e,t){this.multiple?this.allowBatch&&this.handleBatchSelectItems(e,t):this.handleSingleSelectItems(e,t),this.$emit("item-click",e,t)},handleSingleSelectItems:function(e,t){this.handleRecursionNodeChilds(this,function(e){e.model.selected=!1}),e.model.selected=!0},handleBatchSelectItems:function(e,t){this.handleRecursionNodeChilds(e,function(t){t.model.disabled||(e.model.selected_part=!1,t.model.selected=e.model.selected,t.model.selected_part=!1)}),this.handleRecursionNodeParents(e)},onItemToggle:function(e,t){e.model.opened&&this.handleAsyncLoad(e.model.children,e,t)},handleAsyncLoad:function(e,t,n){var i=this;this.async&&e[0].loading&&this.async(t,function(n){if(n.length>0)for(var r in n){n[r].children=[i.initializeLoading()];var s=i.initializeDataItem(n[r]);i.$set(e,r,s)}else t.model.children=[]})},onItemDragStart:function(e,t,n){if(!this.draggable)return!1;e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text",null),this.draggedItem={item:n,parentItem:t.parentItem,index:t.parentItem.indexOf(n)}},onItemDragEnd:function(e,t,n){if(!this.draggable)return!1;this.draggedItem=null},onItemDrop:function(e,t,n){if(!this.draggable)return!1;if(this.draggedItem){if(this.draggedItem.parentItem===n.children||this.draggedItem.item===n||n.children&&-1!==n.children.indexOf(this.draggedItem.item))return;n.children=n.children?n.children.concat(this.draggedItem.item):[this.draggedItem.item];var i=this;this.$nextTick(function(){i.draggedItem.parentItem.splice(i.draggedItem.index,1)})}},getSelectedNodes:function(){return Object(l.a)(this,"XTreeItem").filter(function(e){return e.data.selected||e.data.selected_part}).map(function(e){return e.data})},getUnselectNodes:function(){return Object(l.a)(this,"XTreeItem").filter(function(e){return!e.data.selected&&!e.data.selected_part}).map(function(e){return e.data})}},created:function(){this.initializeData(this.data)},mounted:function(){this.async&&(this.$set(this.data,0,this.initializeLoading()),this.handleAsyncLoad(this.data,this))},components:{XTreeItem:a.a}}},1356:function(e,t,n){"use strict";function i(e){o||n(1418)}var r=n(1272),s=n(1419),o=!1,a=n(11),l=i,c=a(r.a,s.a,!1,l,null,null);c.options.__file="src/views/components/XTree.vue",t.a=c.exports},1418:function(e,t){},1419:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes,attrs:{role:"tree",onselectstart:"return false"}},[n("ul",{class:e.containerClasses,attrs:{role:"group"}},e._l(e.data,function(t,i){return n("x-tree-item",{key:i,attrs:{data:t,"sel-ids":e.selIds,"whole-row":e.wholeRow,"show-checkbox":e.showCheckbox,height:e.sizeHight,"parent-item":e.data,draggable:e.draggable,"on-item-click":e.onItemClick,"on-item-toggle":e.onItemToggle,"on-item-drag-start":e.onItemDragStart,"on-item-drag-end":e.onItemDragEnd,"on-item-drop":e.onItemDrop,klass:i===e.data.length-1?"tree-last":""}})}))])},r=[];i._withStripped=!0;var s={render:i,staticRenderFns:r};t.a=s},1628:function(e,t,n){"use strict";var i=(n(1),n(209)),r=n(207),s=n(1356);t.a={mixins:[i.a,r.a],components:{XTree:s.a},data:function(){return{persList:[],items:[],checkAllResPer:!1,checkResPerGroup:[],res_cache:[]}},methods:{setPers:function(e){return this.persList=e,this.buildItems(),this.initResPerGroup(),this},buildItems:function(){this.items=this.buildPerItems(this.globalPersList,this.persList)},buildPerItems:function(e,t){var n=this;console.log(t);var i=[];return e.forEach(function(e){var r=!1,s=-1!==t.indexOf(e.uri),o=!1,a=0,l=0;e.sub&&e.sub.length>0&&(a=e.sub.length,e.sub.forEach(function(e){-1!==t.indexOf(e.uri)&&l++}),l>0&&(l==a?s=!0:o=!0,r=!0));var c={opened:r,title:e.text,uri:e.uri,icon:e.sub?"ivu-icon ivu-icon-ios-folder":"ivu-icon ivu-icon-document",selected:s,selected_part:o};e.sub&&e.sub.length>0&&(c.children=n.buildPerItems(e.sub,t)),i.push(c)}),i},handleCheckAll:function(){this.indeterminate?this.checkAllResPer=!1:this.checkAllResPer=!this.checkAllResPer,this.checkAllResPer?this.checkResPerGroup=this.res_cache:this.checkResPerGroup=[]},checkResPerChange:function(e){e.length===this.res_pers.length?this.checkAllResPer=!0:0===e.length&&(this.checkAllResPer=!1)},initResPerGroup:function(){var e=this;this.checkResPerGroup=[],this.res_cache=[],this.res_pers.forEach(function(t){e.persList.indexOf(t.uri)>-1&&e.checkResPerGroup.push(t.uri),e.res_cache.push(t.uri)}),this.checkResPerGroup.length===this.res_pers.length?this.checkAllResPer=!0:this.checkAllResPer=!1},get_pers:function(e){var t=[];return e.forEach(function(e){t.push(e.value)}),t},save:function(){var e=this.$refs.ref_x_tree.getSelectedNodes(),t=[];t=this.get_pers(e),this.$emit("save-pers",t.concat(this.checkResPerGroup)),this.close()}},computed:{globalPersList:function(){return this.$store.state.gvars.pers},res_pers:function(){return this.$store.state.gvars.res_pers},indeterminate:function(){return this.checkResPerGroup.length>0&&this.checkResPerGroup.length<this.res_pers.length}}}},2242:function(e,t){},2243:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!1,width:"650",title:e.modal$.title},model:{value:e.modal$.show,callback:function(t){e.$set(e.modal$,"show",t)},expression:"modal$.show"}},[e.modal$.show?n("Tabs",{staticClass:"per-wrap"},[n("TabPane",{attrs:{label:"功能权限"}},[n("x-tree",{ref:"ref_x_tree",attrs:{data:e.items,"text-field-name":"title","value-field-name":"uri","show-checkbox":!0,multiple:!0,allowBatch:!0}})],1),e._v(" "),n("TabPane",{attrs:{label:"资源权限"}},[n("div",{staticClass:"pl-4"},[n("div",{staticClass:"checkall-box"},[n("Checkbox",{attrs:{indeterminate:e.indeterminate,value:e.checkAllResPer},nativeOn:{click:function(t){t.preventDefault(),e.handleCheckAll(t)}}},[e._v("\n\t\t\t\t\t\t\t全选\n\t\t\t\t\t\t")])],1),e._v(" "),n("CheckboxGroup",{staticClass:"res-pers",on:{"on-change":e.checkResPerChange},model:{value:e.checkResPerGroup,callback:function(t){e.checkResPerGroup=t},expression:"checkResPerGroup"}},e._l(e.res_pers,function(t){return n("Checkbox",{staticClass:"d-block",attrs:{label:t.uri}},[e._v(e._s(t.text))])}))],1)])],1):e._e(),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"ghost"},on:{click:e.close}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.saving},on:{click:e.save}},[e._v("确定")])],1)],1)},r=[];i._withStripped=!0;var s={render:i,staticRenderFns:r};t.a=s},435:function(e,t,n){"use strict";function i(e){o||n(2242)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1628),s=n(2243),o=!1,a=n(11),l=i,c=a(r.a,s.a,!1,l,null,null);c.options.__file="src/views/system/roles/select-pers-modal.vue",t.default=c.exports},625:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=e.$children;return i.length&&i.forEach(function(e){var i=e.$options.name,s=e.$children;if(i===t&&n.push(e),s.length){var o=r(e,t,n);o&&n.concat(o)}}),n}t.b=i,n.d(t,"a",function(){return r});window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver},924:function(e,t,n){"use strict";var i=n(210),r=n.n(i),s=n(54),o=n.n(s),a=n(1);t.a={name:"XTreeItem",props:{selIds:{type:[Array,String,Number]},data:{type:Object,required:!0},wholeRow:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},height:{type:Number,default:24},parentItem:{type:Array},draggable:{type:Boolean,default:!1},onItemClick:{type:Function,default:function(){return!1}},onItemToggle:{type:Function,default:function(){return!1}},onItemDragStart:{type:Function,default:function(){return!1}},onItemDragEnd:{type:Function,default:function(){return!1}},onItemDrop:{type:Function,default:function(){return!1}},klass:String},data:function(){return{isHover:!1,isDragEnter:!1,model:this.data}},watch:{isDragEnter:function(e){this.$el.style.backgroundColor=e?"#C9FDC9":"inherit"},data:function(e){this.model=e},selIds:function(e){if(a.a.isArray(e)){-1===e.indexOf(this.model.id)&&this.model.selected&&this.handleItemClick()}}},computed:{isFolder:function(){return this.model.children&&this.model.children.length},classes:function(){return[{"tree-node":!0},{"tree-open":this.model.opened},{"tree-closed":!this.model.opened},{"tree-leaf":!this.isFolder},{"tree-loading":!!this.model.loading},{"tree-drag-enter":this.isDragEnter},o()({},this.klass,!!this.klass)]},anchorClasses:function(){return[{"tree-anchor":!0},{"tree-disabled":this.model.disabled},{"tree-selected":this.model.selected},{"tree-selected-part":this.model.selected_part},{"tree-hovered":this.isHover}]},wholeRowClasses:function(){return[{"tree-wholerow":!0},{"tree-wholerow-clicked":this.model.selected},{"tree-wholerow-hovered":this.isHover}]},themeIconClasses:function(){return[{"tree-icon":!0},{"tree-themeicon":!0},o()({},this.model.icon,!!this.model.icon),{"tree-themeicon-custom":!!this.model.icon}]},isWholeRow:function(){if(this.wholeRow)return void 0===this.$parent.model||!0===this.$parent.model.opened}},methods:{initSelected:function(){var e=this.selIds;if(e&&e.length>0){e.indexOf(this.model.id)>-1&&!this.model.selected&&this.handleItemClick()}},handleRecursionNodeParents:function(e,t){e.$parent&&(t(e.$parent),this.handleRecursionNodeParents(e.$parent,t))},handleItemToggle:function(){this.isFolder&&(this.model.opened=!this.model.opened,this.onItemToggle(this,this.model),this.handleSetGroupMaxHeight())},handleGroupMaxHeight:function(){var e=0,t=0;if(this.model.opened){e=this.$children.length;var n=!0,i=!1,s=void 0;try{for(var o,a=r()(this.$children);!(n=(o=a.next()).done);n=!0){t+=o.value.handleGroupMaxHeight()}}catch(e){i=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw s}}}return e*this.height+t},handleSetGroupMaxHeight:function(){var e=this;this.$refs.group&&(this.$refs.group.style.maxHeight=this.handleGroupMaxHeight()+"px");var t=this;this.$nextTick(function(){e.handleRecursionNodeParents(t,function(e){e.$refs.group&&(e.$refs.group.style.maxHeight=e.handleGroupMaxHeight()+"px")})})},handleItemClick:function(){this.model.disabled||(this.model.selected=!this.model.selected,this.onItemClick(this,this.model))},handleItemDrop:function(e,t,n){this.$el.style.backgroundColor="inherit",this.onItemDrop(e,t,n)}},mounted:function(){this.handleSetGroupMaxHeight(),this.initSelected()}}},959:function(e,t,n){"use strict";var i=n(924),r=n(960),s=n(11),o=s(i.a,r.a,!1,null,null,null);o.options.__file="src/views/components/XTreeItem.vue",t.a=o.exports},960:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:e.classes,attrs:{role:"treeitem",draggable:e.draggable},on:{dragstart:function(t){t.stopPropagation(),e.onItemDragStart(t,e._self,e._self.model)},dragend:function(t){t.stopPropagation(),t.preventDefault(),e.onItemDragEnd(t,e._self,e._self.model)},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragenter:function(t){t.stopPropagation(),t.preventDefault(),e.isDragEnter=!0},dragleave:function(t){t.stopPropagation(),t.preventDefault(),e.isDragEnter=!1},drop:function(t){t.stopPropagation(),t.preventDefault(),e.handleItemDrop(t,e._self,e._self.model)}}},[e.isWholeRow?n("div",{class:e.wholeRowClasses,attrs:{role:"presentation"}},[e._v(" ")]):e._e(),e._v(" "),n("i",{staticClass:"tree-icon tree-ocl",attrs:{role:"presentation"},on:{click:e.handleItemToggle}}),e._v(" "),n("div",{class:e.anchorClasses,on:{click:e.handleItemClick,mouseover:function(t){e.isHover=!0},mouseout:function(t){e.isHover=!1}}},[e.showCheckbox&&!e.model.loading?n("i",{staticClass:"tree-icon tree-checkbox",attrs:{role:"presentation"}}):e._e(),e._v(" "),e.model.loading?e._e():n("i",{class:e.themeIconClasses,attrs:{role:"presentation"}}),e._v(" "),n("span",{class:e.model.color},[e._v(e._s(e.model.text))])]),e._v(" "),e.isFolder?n("ul",{ref:"group",staticClass:"tree-children",attrs:{role:"group"}},e._l(e.model.children,function(t,i){return n("x-tree-item",{key:i,attrs:{data:t,"sel-ids":e.selIds,"whole-row":e.wholeRow,"show-checkbox":e.showCheckbox,height:e.height,"parent-item":e.model.children,draggable:e.draggable,"on-item-click":e.onItemClick,"on-item-toggle":e.onItemToggle,"on-item-drag-start":e.onItemDragStart,"on-item-drag-end":e.onItemDragEnd,"on-item-drop":e.onItemDrop}})})):e._e()])},r=[];i._withStripped=!0;var s={render:i,staticRenderFns:r};t.a=s}});