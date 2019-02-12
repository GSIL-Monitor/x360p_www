webpackJsonp([200],{1009:function(e,t){},1010:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes,attrs:{role:"tree",onselectstart:"return false"}},[i("ul",{class:e.containerClasses,attrs:{role:"group"}},e._l(e.data,function(t,n){return i("x-tree-item",{key:n,attrs:{data:t,"sel-ids":e.selIds,"whole-row":e.wholeRow,"show-checkbox":e.showCheckbox,height:e.sizeHight,"parent-item":e.data,draggable:e.draggable,"on-item-click":e.onItemClick,"on-item-toggle":e.onItemToggle,"on-item-drag-start":e.onItemDragStart,"on-item-drag-end":e.onItemDragEnd,"on-item-drop":e.onItemDrop,klass:n===e.data.length-1?"tree-last":""}})}))])},s=[];n._withStripped=!0;var l={render:n,staticRenderFns:s};t.a=l},1060:function(e,t,i){"use strict";var n=i(207),s=i(208),l=i(1),a=i(1061);t.a={name:"SelectDepartmentJobtitleModal",mixins:[n.a,s.a],components:{DepartmentTree:a.a},props:{value:{type:Boolean,default:""},width:{type:String,default:"640"},title:{type:String,default:"选择部门与职位"},multiple:{type:Boolean,default:!1}},data:function(){return{modalShow:!1,selected:null,jobtitle_did:0}},computed:{labelText:function(){return this.selected?this.selected.dpt_name:""},jobtitles:function(){return this.$store.state.gvars.dicts.jobtitle}},methods:{nodeClick:function(e,t){this.selected=l.b.copy(t._data)},ok:function(){return this.selected?0==this.jobtitle_did?void this.$Message.error("请选择部门职位"):(this.$emit("on-select",{dpt_id:this.selected.dpt_id,jobtitle_did:this.jobtitle_did}),void this.cancel()):void this.$Message.error("没有选中任何部门")},cancel:function(){this.modalShow=!1,this.$emit("input",!1)},closeModal:function(){this.cancel()}},watch:{value:function(e){this.modalShow=e,e&&(this.selected=null,this.jobtitle_did=0)}}}},1061:function(e,t,i){"use strict";var n=i(959),s=i(1062),l=i(11),a=l(n.a,s.a,!1,null,null,null);a.options.__file="src/views/components/DepartmentTree.vue",t.a=a.exports},1062:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes,staticStyle:{"min-height":"500px",overflow:"auto"}},[i("div",{class:e.multiple?"col-sm-7":"col-sm-12"},[i("span",{class:{"tree-anchor":e.rootAvailable},style:e.rootActive?e.activeStyleObj:"",on:{click:e.clickRootNode}},[i("Icon",{attrs:{type:"ios-people"}}),e._v("\n\t\t\t\t"+e._s(e.org_name)+"\n\t\t\t")],1),e._v(" "),i("x-tree",{attrs:{"sel-ids":e.selIds,multiple:e.multiple,"show-checkbox":e.multiple,"allow-batch":e.multiple,data:e.department,"text-field-name":"dpt_name","value-field-name":"dpt_id"},on:{"item-click":e.nodeClick}})],1),e._v(" "),e.multiple?i("div",{staticClass:"col-sm-5"},[i("Card",{staticStyle:{height:"100%"},attrs:{"dis-hover":""}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("span",[e._v("已选择："),i("span",{staticClass:"badge"},[e._v(e._s(e.selectedTotal))])]),e._v(" "),i("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"清空"},on:{click:e.clearSelectedId}})],1),e._v(" "),i("ul",{staticClass:"multi-selected-list"},e._l(e.selectedList,function(t){return i("li",{staticClass:"mt-2"},[i("span",[e._v(e._s(t.dpt_name))]),e._v(" "),i("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"移除"},on:{click:function(i){e.cancelSelectedId(t)}}})],1)}))])],1):e._e()])},s=[];n._withStripped=!0;var l={render:n,staticRenderFns:s};t.a=l},1182:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!0,width:e.width,title:e.title},on:{"on-cancel":e.closeModal},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[i("department-tree",{on:{"node-click":e.nodeClick}}),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e.multiple?e._e():i("div",{staticClass:"footer-selected pull-left"},[i("span",[e._v("已选择：")]),e._v(" "),i("Input",{staticClass:"x-ivu-input",staticStyle:{width:"120px"},attrs:{value:e.labelText,readonly:""}})],1),e._v(" "),i("div",{staticClass:"footer-selected  ml-3 pull-left"},[i("span",[e._v("部门/职位：")]),e._v(" "),i("Select",{staticClass:"x-ivu-select",staticStyle:{width:"120px"},attrs:{placement:"top"},model:{value:e.jobtitle_did,callback:function(t){e.jobtitle_did=t},expression:"jobtitle_did"}},[i("Option",{attrs:{value:0}},[e._v(" ")]),e._v(" "),e._l(e.jobtitles,function(t,n){return i("Option",{key:n,attrs:{value:t.did}},[e._v(e._s(t.title))])})],2)],1),e._v(" "),i("Button",{attrs:{type:"default"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),i("Button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("确定")])],1)],1)},s=[];n._withStripped=!0;var l={render:n,staticRenderFns:s};t.a=l},349:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1060),s=i(1182),l=i(11),a=l(n.a,s.a,!1,null,null,null);a.options.__file="src/views/components/SelectDepartmentJobtitleModal.vue",t.default=a.exports},620:function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++)if(e===t[i])return!0;return!1}function s(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e.$children;return n.length&&n.forEach(function(e){var n=e.$options.name,l=e.$children;if(n===t&&i.push(e),l.length){var a=s(e,t,i);a&&i.concat(a)}}),i}t.b=n,i.d(t,"a",function(){return s});window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver},921:function(e,t,i){"use strict";var n=i(210),s=i.n(n),l=i(54),a=i.n(l),o=i(1);t.a={name:"XTreeItem",props:{selIds:{type:[Array,String,Number]},data:{type:Object,required:!0},wholeRow:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},height:{type:Number,default:24},parentItem:{type:Array},draggable:{type:Boolean,default:!1},onItemClick:{type:Function,default:function(){return!1}},onItemToggle:{type:Function,default:function(){return!1}},onItemDragStart:{type:Function,default:function(){return!1}},onItemDragEnd:{type:Function,default:function(){return!1}},onItemDrop:{type:Function,default:function(){return!1}},klass:String},data:function(){return{isHover:!1,isDragEnter:!1,model:this.data}},watch:{isDragEnter:function(e){this.$el.style.backgroundColor=e?"#C9FDC9":"inherit"},data:function(e){this.model=e},selIds:function(e){if(o.a.isArray(e)){-1===e.indexOf(this.model.id)&&this.model.selected&&this.handleItemClick()}}},computed:{isFolder:function(){return this.model.children&&this.model.children.length},classes:function(){return[{"tree-node":!0},{"tree-open":this.model.opened},{"tree-closed":!this.model.opened},{"tree-leaf":!this.isFolder},{"tree-loading":!!this.model.loading},{"tree-drag-enter":this.isDragEnter},a()({},this.klass,!!this.klass)]},anchorClasses:function(){return[{"tree-anchor":!0},{"tree-disabled":this.model.disabled},{"tree-selected":this.model.selected},{"tree-selected-part":this.model.selected_part},{"tree-hovered":this.isHover}]},wholeRowClasses:function(){return[{"tree-wholerow":!0},{"tree-wholerow-clicked":this.model.selected},{"tree-wholerow-hovered":this.isHover}]},themeIconClasses:function(){return[{"tree-icon":!0},{"tree-themeicon":!0},a()({},this.model.icon,!!this.model.icon),{"tree-themeicon-custom":!!this.model.icon}]},isWholeRow:function(){if(this.wholeRow)return void 0===this.$parent.model||!0===this.$parent.model.opened}},methods:{initSelected:function(){var e=this.selIds;if(e&&e.length>0){e.indexOf(this.model.id)>-1&&!this.model.selected&&this.handleItemClick()}},handleRecursionNodeParents:function(e,t){e.$parent&&(t(e.$parent),this.handleRecursionNodeParents(e.$parent,t))},handleItemToggle:function(){this.isFolder&&(this.model.opened=!this.model.opened,this.onItemToggle(this,this.model),this.handleSetGroupMaxHeight())},handleGroupMaxHeight:function(){var e=0,t=0;if(this.model.opened){e=this.$children.length;var i=!0,n=!1,l=void 0;try{for(var a,o=s()(this.$children);!(i=(a=o.next()).done);i=!0){t+=a.value.handleGroupMaxHeight()}}catch(e){n=!0,l=e}finally{try{!i&&o.return&&o.return()}finally{if(n)throw l}}}return e*this.height+t},handleSetGroupMaxHeight:function(){var e=this;this.$refs.group&&(this.$refs.group.style.maxHeight=this.handleGroupMaxHeight()+"px");var t=this;this.$nextTick(function(){e.handleRecursionNodeParents(t,function(e){e.$refs.group&&(e.$refs.group.style.maxHeight=e.handleGroupMaxHeight()+"px")})})},handleItemClick:function(){this.model.disabled||(this.model.selected=!this.model.selected,this.onItemClick(this,this.model))},handleItemDrop:function(e,t,i){this.$el.style.backgroundColor="inherit",this.onItemDrop(e,t,i)}},mounted:function(){this.handleSetGroupMaxHeight(),this.initSelected()}}},941:function(e,t,i){"use strict";var n=i(210),s=i.n(n),l=i(54),a=i.n(l),o=i(956),r=i(620),d=i(1),c=0;t.a={name:"XTree",props:{selIds:{type:[Array,String,Number]},data:{type:Array},size:{type:String,validator:function(e){return["large","small"].indexOf(e)>-1}},showCheckbox:{type:Boolean,default:!1},wholeRow:{type:Boolean,default:!1},noDots:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},allowBatch:{type:Boolean,default:!1},textFieldName:{type:String,default:"text"},valueFieldName:{type:String,default:"value"},async:{type:Function},loadingText:{type:String,default:"Loading..."},draggable:{type:Boolean,default:!1},klass:String},data:function(){return{draggedItem:null}},computed:{classes:function(){return[{tree:!0},{"tree-default":!this.size},a()({},"tree-default-"+this.size,!!this.size),{"tree-checkbox-selection":!!this.showCheckbox},a()({},this.klass,!!this.klass)]},containerClasses:function(){return[{"tree-container-ul":!0},{"tree-children":!0},{"tree-wholerow-ul":!!this.wholeRow},{"tree-no-dots":!!this.noDots}]},sizeHight:function(){switch(this.size){case"large":return 32;case"small":return 18;default:return 24}}},methods:{initializeData:function(e){if(e&&e.length>0)for(var t=0,i=e.length;t<i;t++){var n=this.initializeDataItem(e[t]);e[t]=n,void 0!==e[t].children&&e[t].children.length>0&&this.initializeData(e[t].children)}},initializeDataItem:function(e){function t(e,t,i){this.id=e.id||c++,this.text=e[t]||"",this.value=e[i]||e[t],this.icon=e.icon||"",this.color=e.color||"",this.opened=e.opened||!1,this.selected=e.selected||!1,this.selected_part=e.selected_part||!1,this.disabled=e.disabled||!1,this.loading=e.loading||!1,this.children=e.children||[],this._data=d.b.copy(e)}return new t(e,this.textFieldName,this.valueFieldName)},initializeLoading:function(){var e={};return e[this.textFieldName]=this.loadingText,e.disabled=!0,e.loading=!0,this.initializeDataItem(e)},handleRecursionNodeChilds:function(e,t){if(e.$children&&e.$children.length>0){var i=!0,n=!1,l=void 0;try{for(var a,o=s()(e.$children);!(i=(a=o.next()).done);i=!0){var r=a.value;r.disabled||(t(r),this.handleRecursionNodeChilds(r,t))}}catch(e){n=!0,l=e}finally{try{!i&&o.return&&o.return()}finally{if(n)throw l}}}},handleRecursionNodeParents:function(e){var t=e.$parent;if(t.$refs.group){var i=t.$children.filter(function(e){return e.data.selected}).length,n=t.$children.filter(function(e){return e.data.selected||e.data.selected_part}).length,s=t.$children.length;t.data.selected=i==s,t.data.selected_part=i<s&&n>0,this.handleRecursionNodeParents(t)}},onItemClick:function(e,t){this.multiple?this.allowBatch&&this.handleBatchSelectItems(e,t):this.handleSingleSelectItems(e,t),this.$emit("item-click",e,t)},handleSingleSelectItems:function(e,t){this.handleRecursionNodeChilds(this,function(e){e.model.selected=!1}),e.model.selected=!0},handleBatchSelectItems:function(e,t){this.handleRecursionNodeChilds(e,function(t){t.model.disabled||(e.model.selected_part=!1,t.model.selected=e.model.selected,t.model.selected_part=!1)}),this.handleRecursionNodeParents(e)},onItemToggle:function(e,t){e.model.opened&&this.handleAsyncLoad(e.model.children,e,t)},handleAsyncLoad:function(e,t,i){var n=this;this.async&&e[0].loading&&this.async(t,function(i){if(i.length>0)for(var s in i){i[s].children=[n.initializeLoading()];var l=n.initializeDataItem(i[s]);n.$set(e,s,l)}else t.model.children=[]})},onItemDragStart:function(e,t,i){if(!this.draggable)return!1;e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text",null),this.draggedItem={item:i,parentItem:t.parentItem,index:t.parentItem.indexOf(i)}},onItemDragEnd:function(e,t,i){if(!this.draggable)return!1;this.draggedItem=null},onItemDrop:function(e,t,i){if(!this.draggable)return!1;if(this.draggedItem){if(this.draggedItem.parentItem===i.children||this.draggedItem.item===i||i.children&&-1!==i.children.indexOf(this.draggedItem.item))return;i.children=i.children?i.children.concat(this.draggedItem.item):[this.draggedItem.item];var n=this;this.$nextTick(function(){n.draggedItem.parentItem.splice(n.draggedItem.index,1)})}},getSelectedNodes:function(){return Object(r.a)(this,"XTreeItem").filter(function(e){return e.data.selected||e.data.selected_part}).map(function(e){return e.data})},getUnselectNodes:function(){return Object(r.a)(this,"XTreeItem").filter(function(e){return!e.data.selected&&!e.data.selected_part}).map(function(e){return e.data})}},created:function(){this.initializeData(this.data)},mounted:function(){this.async&&(this.$set(this.data,0,this.initializeLoading()),this.handleAsyncLoad(this.data,this))},components:{XTreeItem:o.a}}},956:function(e,t,i){"use strict";var n=i(921),s=i(957),l=i(11),a=l(n.a,s.a,!1,null,null,null);a.options.__file="src/views/components/XTreeItem.vue",t.a=a.exports},957:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{class:e.classes,attrs:{role:"treeitem",draggable:e.draggable},on:{dragstart:function(t){t.stopPropagation(),e.onItemDragStart(t,e._self,e._self.model)},dragend:function(t){t.stopPropagation(),t.preventDefault(),e.onItemDragEnd(t,e._self,e._self.model)},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragenter:function(t){t.stopPropagation(),t.preventDefault(),e.isDragEnter=!0},dragleave:function(t){t.stopPropagation(),t.preventDefault(),e.isDragEnter=!1},drop:function(t){t.stopPropagation(),t.preventDefault(),e.handleItemDrop(t,e._self,e._self.model)}}},[e.isWholeRow?i("div",{class:e.wholeRowClasses,attrs:{role:"presentation"}},[e._v(" ")]):e._e(),e._v(" "),i("i",{staticClass:"tree-icon tree-ocl",attrs:{role:"presentation"},on:{click:e.handleItemToggle}}),e._v(" "),i("div",{class:e.anchorClasses,on:{click:e.handleItemClick,mouseover:function(t){e.isHover=!0},mouseout:function(t){e.isHover=!1}}},[e.showCheckbox&&!e.model.loading?i("i",{staticClass:"tree-icon tree-checkbox",attrs:{role:"presentation"}}):e._e(),e._v(" "),e.model.loading?e._e():i("i",{class:e.themeIconClasses,attrs:{role:"presentation"}}),e._v(" "),i("span",{class:e.model.color},[e._v(e._s(e.model.text))])]),e._v(" "),e.isFolder?i("ul",{ref:"group",staticClass:"tree-children",attrs:{role:"group"}},e._l(e.model.children,function(t,n){return i("x-tree-item",{key:n,attrs:{data:t,"sel-ids":e.selIds,"whole-row":e.wholeRow,"show-checkbox":e.showCheckbox,height:e.height,"parent-item":e.model.children,draggable:e.draggable,"on-item-click":e.onItemClick,"on-item-toggle":e.onItemToggle,"on-item-drag-start":e.onItemDragStart,"on-item-drag-end":e.onItemDragEnd,"on-item-drop":e.onItemDrop}})})):e._e()])},s=[];n._withStripped=!0;var l={render:n,staticRenderFns:s};t.a=l},959:function(e,t,i){"use strict";var n=i(207),s=i(208),l=i(1),a=i(989);t.a={name:"DepartmentTree",mixins:[n.a,s.a],props:{value:{type:[Array,Number,String],default:function(){return 0}},rootAvailable:{type:Boolean,default:!1}},components:{XTree:a.a},data:function(){return{selIds:this.value,rootActive:!1,activeStyleObj:{background:"#e1e1e1"}}},computed:{multiple:function(){return l.a.isArray(this.value)},classes:function(){return["x-department row"]},department:function(){var e=l.b.copy(this.$store.state.gvars.departments);return e.forEach(function(e){e.id=e.dpt_id,1==e.dpt_type?e.icon="ivu-icon ivu-icon-ios-home":2==e.dpt_type?e.icon="ivu-icon ivu-icon-location":e.icon="ivu-icon ivu-icon-network"}),l.b.list_to_tree(e,"dpt_id","pid")},selectedTotal:function(){return this.selIds.length},selectedList:function(){var e=this,t=[];return this.selIds.forEach(function(i){i>0&&t.push(e.$store.state.gvars.departments.find(function(e){return e.dpt_id===i}))}),t}},watch:{value:function(e){this.selIds=e}},methods:{nodeClick:function(e,t){this.multiple?(this.addSelectedId(t),this.handleItemParent(e)):(this.rootActive=!1,this.selIds=t.id),this.$emit("input",this.selIds),this.$emit("node-click",e,t)},clickRootNode:function(){!this.multiple&&this.rootAvailable&&(this.selIds=0,this.rootActive=!0,this.clearSty(this.department),this.$emit("input",this.selIds),this.$emit("root-click",this.org_name))},clearSty:function(e){var t=this;e.forEach(function(e){e.selected=!1,e.children&&e.children.length>0&&t.clearSty(e.children)})},handleItemParent:function(e){var t=e.$parent;if(t.$refs.group){var i=this.selIds.indexOf(t.data.id);t.data.selected?-1===i&&this.selIds.push(t.data.id):i>-1&&this.selIds.splice(i,1),this.handleItemParent(t)}},addSelectedId:function(e){var t=this,i=this.selIds.indexOf(e.id);e.selected?-1===i&&this.selIds.push(e.id):i>-1&&this.selIds.splice(i,1),e.children.length>0&&e.children.forEach(function(e){t.addSelectedId(e)})},clearSelectedId:function(){this.selIds=[]},cancelSelectedId:function(e){var t=this.selIds.indexOf(e.dpt_id);t>-1&&this.selIds.splice(t,1)}}}},989:function(e,t,i){"use strict";function n(e){a||i(1009)}var s=i(941),l=i(1010),a=!1,o=i(11),r=n,d=o(s.a,l.a,!1,r,null,null);d.options.__file="src/views/components/Xtree.vue",t.a=d.exports}});