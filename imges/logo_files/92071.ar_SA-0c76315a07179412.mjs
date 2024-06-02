"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[92071],{236409:(e,l,a)=>{var n;a.r(l),a.d(l,{default:()=>t});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CloseupLink_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"advertiserId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"attributionSourceId",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"campaignId",storageKey:null},{alias:null,args:null,concreteType:"PinCarouselData",kind:"LinkedField",name:"carouselData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinCarouselSlot",kind:"LinkedField",name:"carouselSlots",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},n,{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDownstreamPromotion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPromoted",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinPromotionId",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[n],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedIsLeadAd",storageKey:null},{alias:null,args:null,concreteType:"PromotedLeadForm",kind:"LinkedField",name:"promotedLeadForm",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"leadFormId",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};i.hash="745c3a480603a026639c745fb9f1fa52";let t=i},443107:(e,l,a)=>{var n,i,t;a.r(l),a.d(l,{default:()=>s});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollageChips_pin",selections:[{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinTagChipImagesPerSpec",kind:"LinkedField",name:"pinTagsChips",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Thumbnails",kind:"LinkedField",name:"image",plural:!1,selections:[n={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CollectionPin",kind:"LinkedField",name:"collectionPin",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionPinItem",kind:"LinkedField",name:"itemData",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pinId",storageKey:null},{alias:null,args:[{kind:"Literal",name:"spec",value:"750x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:[i,t,n],storageKey:'images(spec:"750x")'}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CollageChips_pin2"}],type:"Pin",abstractKey:null};r.hash="ccfee94118043ad859460cc7806b13e4";let s=r},863380:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollageChips_pin2",selections:[{args:null,kind:"FragmentSpread",name:"CloseupLink_pin"}],type:"Pin",abstractKey:null};n.hash="df1a502b4660ea1f2f0f126f142daec4";let i=n},824112:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin2"}],type:"Pin",abstractKey:null};n.hash="6016b14b2081c4349ad3f3a910cc2ea7";let i=n},614434:(e,l,a)=>{var n;a.r(l),a.d(l,{default:()=>t});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin2",selections:[{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:n,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null}],type:"Pin",abstractKey:null};i.hash="4ffad4c63399ee2e54c9a3a86d114984";let t=i},268127:(e,l,a)=>{a.d(l,{Y:()=>g,Z:()=>_});var n,i,t=a(667294);a(167912);var r=a(333739),s=a(807023);let d=void 0!==n?n:n=a(824112),o=void 0!==i?i:i=a(614434),u=e=>{let l=Symbol("SKIP"),a=e=>Object.entries(e).filter(([,e])=>e!==l).reduce((e,[l,a])=>({...e,[l]:a}),{});if("deprecated"!==e.type){let n=e.data;return a({...n.isEligibleForPdp||n.isOosProduct||n.isStaleProduct?{...(()=>{let e=n.richMetadata?.products?.[0];return{carousel_image_count:l,brand_signature:e?.brand?.signature||l,free_shipping_price:e?.shippingInfo?.freeShippingPrice||l,free_shipping_value:e?.shippingInfo?.freeShippingValue||l,num_variants:e?.variantSet?.variants?.length||l,total_dimension_option_count:e?.variantSet?.dimensionMetadata?.length||l,valid_dimension_option_count:l}})(),pin_show_pdp_oos:!!n.isOosProduct||l,pin_show_pdp_stale:!!n.isStaleProduct||l,pin_show_pdp:!!n.isEligibleForPdp||l}:{},pin_is_shop_the_look:!!(n.shoppingFlags?.includes(2)||n.aggregatedPinData?.isShopTheLook)||l,is_available:!!n.shoppingFlags?.includes(1)||l,is_product_pin_v2:!!n.shoppingFlags?.includes(5)||l,is_rich_product_pin:!!n.shoppingFlags?.includes(6)||l,is_organic_product_carousel:l,item_id:(n.richSummary?.products?.[0]||{}).itemId||l,item_set_id:(n.richSummary?.products?.[0]||{}).itemSetId||l,story_pin_id:n.storyPinData?n.storyPinDataId:l})}{let n=e.data;return n?a({...n.is_eligible_for_pdp||n.is_oos_product||n.is_stale_product?{...(()=>{let e=(n.rich_metadata||n.rich_summary)?.products?.[0],a=e?.additional_images?.length?(n.images?1:0)+e.additional_images.length:n.carousel_data?.carousel_slots?.length,i=n.rich_metadata?.products?.[0],t=i?.variant_set?.variants??[];return{carousel_image_count:a||l,brand_signature:i?.brand?.signature||l,free_shipping_price:i?.shipping_info?.free_shipping_price||l,free_shipping_value:i?.shipping_info?.free_shipping_value||l,num_variants:t.length||l,total_dimension_option_count:i?.variant_set?.dimension_metadata?.length||l,valid_dimension_option_count:(i?.variant_set?.dimension_metadata||[]).reduce((e,{name:l,values:a})=>e+(l&&a||[]).filter(e=>t.some(a=>a.dimensions?.[l??""]===e)).length,0)||l}})(),pin_show_pdp_oos:!!n.is_oos_product||l,pin_show_pdp_stale:!!n.is_stale_product||l,pin_show_pdp:!!n.is_eligible_for_pdp||l}:{},pin_is_shop_the_look:!!(n.shopping_flags?.includes(2)||n.aggregated_pin_data?.is_shop_the_look)||l,is_available:!!n.shopping_flags?.includes(1)||l,is_product_pin_v2:!!n.shopping_flags?.includes(5)||l,is_rich_product_pin:!!n.shopping_flags?.includes(6)||l,is_organic_product_carousel:!!(n.shopping_flags?.includes(10)||(n.product_pin_data?.items?.[0]||{}).additional_images)||l,item_id:(n.rich_summary?.products?.[0]||{}).item_id||l,item_set_id:(n.rich_summary?.products?.[0]||{}).item_set_id||l,story_pin_id:n.story_pin_data?n.story_pin_data_id:l}):{}}},c=e=>0===Object.keys(e).length?{}:{commerce_data:JSON.stringify(e)},p=e=>{let{childDataKey__DEPRECATED:l}=(0,s.Q)(d,e,{useLegacyAdapter:e=>({})}),{childDataKey__DEPRECATED:a}=(0,r.Zm)(o,null==l?{type:"deprecated",data:null}:l,{useGraphQLAdapter:e=>e,useLegacyAdapter:e=>e}),n=(0,t.useRef)(a);return(0,t.useEffect)(()=>{n.current=a}),(0,t.useCallback)(e=>c({...e?.default,...u(n.current),...e?.override}),[])},g=({children:e,pinKey:l})=>e(p(l)),_=p},392071:(e,l,a)=>{a.d(l,{Z:()=>g}),a(167912);var n,i,t=a(883119),r=a(207012),s=a(807023),d=a(340523),o=a(182074),u=a(785893);let c={chip:{marginRight:1,flex:"1 1 0"},chipInner:{paddingBottom:"100%"},chipContainer:{marginRight:-1}},p=void 0!==n?n:n=a(443107);function g({pinKey:e,enableCloseupLink:l,trackingParamsMap:n}){let g=(0,r.Z)(p,e),{checkExperiment:_}=(0,d.F)(),{anyEnabled:m}=_("aid_web_collection_pin_data"),{childDataKey__DEPRECATED:y}=(0,s.Q)(void 0!==i?i:i=a(863380),g,{useLegacyAdapter:e=>({})}),{aggregatedPinData:h,collectionPin:k}=g,{pinTagsChips:S}=h||{},{itemData:f}=k||{},F=S&&S.length>=3?S.slice(0,3):[],v=f&&f.length>=3?f.slice(0,3):[];return m?(0,u.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:c.chipContainer},display:"flex",children:v.map(e=>{let a=e.images||{},i=(0,u.jsx)(t.Ee,{alt:"",fit:"cover",naturalHeight:a.height??1,naturalWidth:a.width??1,role:"presentation",src:a.url??""});return(0,u.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:c.chip},"data-test-id":"collageChip",children:(0,u.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:c.chipInner},position:"relative",children:(0,u.jsx)(t.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,u.jsx)(t.zd,{height:"100%",wash:!0,width:"100%",children:l?(0,u.jsx)(o.Z,{collageChipId:e.pinId??"",pinKey:y,sizing:"fullSize",trackingParamsMap:n,children:i}):i})})})},e.pinId)})}):(0,u.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:c.chipContainer},display:"flex",children:F.map(e=>{let a=e.image||{},i=(0,u.jsx)(t.Ee,{alt:"",fit:"cover",naturalHeight:a.height??1,naturalWidth:a.width??1,role:"presentation",src:a.url??""});return(0,u.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:c.chip},"data-test-id":"collageChip",children:(0,u.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:c.chipInner},position:"relative",children:(0,u.jsx)(t.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,u.jsx)(t.zd,{height:"100%",wash:!0,width:"100%",children:l?(0,u.jsx)(o.Z,{collageChipId:e.entityId??"",pinKey:y,sizing:"fullSize",trackingParamsMap:n,children:i}):i})})})},e.entityId)})})}},182074:(e,l,a)=>{a.d(l,{Z:()=>k}),a(167912);var n,i=a(883119),t=a(598356),r=a(214877),s=a(207012),d=a(140017),o=a(340370),u=a(340523),c=a(5859),p=a(427514),g=a(268127),_=a(149722),m=a(879977),y=a(785893);let h=void 0!==n?n:n=a(236409);function k({sizing:e="default",children:l,collageChipId:a,componentType:n,contextLogData:k,elementType:S,disableA11yLabel:f,pinKey:F,productTagParentPinId:v,trackingParamsMap:K,viewParameter:P,viewType:I}){let b=(0,d.ZP)(),{isRTL:L}=(0,c.B)(),D=(0,s.Z)(h,F),{logContextEvent:T}=(0,r.v)(),x=(0,m.E)(),{checkExperiment:w}=(0,u.F)(),{isAuth:C}=(0,_.Z)(),A=x.contextLogData?.story_type==="product_tagged_shopping_module_upsell",j=!L&&w(C?"closeup_auth_related_pins_above_fold_2024_dweb":"closeup_unauth_related_pins_above_fold_2024_dweb").group||"",E=["polished_stacked_closeup"].includes(j),Z=C&&w("closeup_dweb_remove_magnifying_glass").anyEnabled,{carouselData:z,entityId:O}=D,M=!!D.promotedIsLeadAd,R={},B=`/pin/${a||O}/`,G=(0,t.Xx)();if(G?.variantUrl&&(B=`/pin/${G.variantUrl}/`),z){let{carouselSlots:e,entityId:l}=z,a=z.index??0;B=`/pin/${O}/`,R={carousel_slot_id:e?.[a]&&e[a].entityId,carousel_data_id:l,carousel_slot_index:a}}let U=(0,g.Z)(D);R={...R,...U({default:k?.commerce_data})};let H=()=>{let e={};if(M)T({event_type:8948,view_type:I||x.viewType,view_parameter:P||x.viewParameter,component:null,object_id_str:D.entityId,aux_data:{closeup_navigation_type:"click",lead_form_id:D.promotedLeadForm?.leadFormId,is_lead_ad:1}}),T({event_type:12,view_type:I||x.viewType,view_parameter:P||x.viewParameter,component:null,object_id_str:D.entityId,aux_data:{lead_form_id:D.promotedLeadForm?.leadFormId,is_lead_ad:1,...U()}});else{let l={...k,...U({default:k?.commerce_data})};T({event_type:101,component:n||x.componentType,element:S,object_id_str:O,view_type:I||x.viewType,view_parameter:P||x.viewParameter,aux_data:l}),A&&(e={storyPinProductEventData:{productPinIdStr:O,pinIdStr:v}}),T({aux_data:{closeup_navigation_type:"click",...l},component:n||x.componentType,element:S,event_data:e,event_type:8948,object_id_str:O,view_type:I||x.viewType,view_parameter:P||x.viewParameter})}},V=(0,o.Z)({href:B,externalData:{auxData:R,pin:D&&{advertiserId:D.advertiserId,attributionSourceId:D.attributionSourceId,board:D.board&&{url:D.board.url},campaignId:D.campaignId,entityId:D.entityId,isDownstreamPromotion:D.isDownstreamPromotion,isPromoted:D.isPromoted,pinner:D.pinner&&{username:D.pinner.username},pinPromotionId:D.pinPromotionId,promoter:D.promoter&&{entityId:D.promoter.entityId},storyPinDataId:D.storyPinDataId,trackingParams:D.trackingParams,trackingParamsMap:K}}});return(0,y.jsx)(i.Tg,{accessibilityLabel:f?void 0:(0,p.Z)(b.bt("صفحة منشور {{ pinTitle }}", "{{ pinTitle }} pin page", "pinRep.closeupLink.tapArea.accessibilityLabel", undefined, true),{pinTitle:D.gridTitle||D.title||D.description||""}),fullHeight:"fullSize"===e,fullWidth:"fullSize"===e,href:B,mouseCursor:E||Z?void 0:"zoomIn",onTap:({event:e,dangerouslyDisableOnNavigation:l})=>{l(),H(),V({event:e})},rounding:2,children:l})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/92071.ar_SA-0c76315a07179412.mjs.map