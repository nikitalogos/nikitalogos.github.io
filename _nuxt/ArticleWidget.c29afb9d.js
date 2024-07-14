import{g as f,k as b,o as i,c as n,a as s,t as r,q as a,j as p,w as y,d as v,F as u,i as h,s as $,e as C,p as j,f as S,_ as A}from"./entry.81a3d795.js";import{p as R}from"./projects.fb27f4d6.js";import{_ as B}from"./MarkdownViewWidget.25c75c49.js";const E=f({props:{article:{type:Object,required:!0},lang:{type:String,default:"en"},is_preview:Boolean},data(){return{preview_text_md:"",main_text_md:"",is_show_copied_notification:!1,articles:b,projects:R}},computed:{project_name(){let e=this.projects.by_id[this.article.project_id];return e===void 0?"":e.name},article_title(){return this.article.title[this.lang]},markdown_uid(){return`${this.article.id}__markdown`},time_of_read_min(){let e=1500,t=this.main_text_md.length;return Math.ceil(t/e)},lang_links(){let e=[],t=this.article.langs;for(let l=0;l<t.length;l++){let c=t[l],m={en:"English",ru:"Russian"}[c];m||(m="");let g={name:m,is_current:c===this.lang,route:{name:"blog-article_id",params:{article_id:this.article.id},query:{lang:c}}};e.push(g)}return e},is_project(){return this.article.project_id!==""},is_tags(){return this.article.tags.length>0},is_links(){return this.article.links.length>0}},methods:{async load_article_content(e){let t=await this.articles.load_article_content(this.article.id,e);this.preview_text_md=t.preview_md,this.main_text_md=`${t.preview_md}

${t.main_md}`},async download_pdf(){const e=t=>new Promise(l=>setTimeout(l,t));this.articles.is_print=!0,await e(1e3),window.print(),await e(1e3),this.articles.is_print=!1},download_md(){var e=`# ${this.article_title}

${this.main_text_md}`,t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",`${this.article.id}.md`),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},_copyToClipboard(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const l=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):!1;t.select(),document.execCommand("copy"),document.body.removeChild(t),l&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(l)),this.is_show_copied_notification=!0,setTimeout(()=>{this.is_show_copied_notification=!1},1500)},copy_link(){this._copyToClipboard(window.location.href)}},async created(){await this.load_article_content(this.lang)},watch:{async $route(e){await this.load_article_content(e.query.lang)}}},"$mLjA8xHQE6"),_=e=>(j("data-v-642ba570"),e=e(),S(),e),I={class:"header-wrapper"},T={class:"item"},q={key:0,class:"item"},L={key:1,class:"project"},N={class:"caption"},V={key:1},D={key:0,class:"tags-wrapper"},F={class:"tag"},M={key:0,style:{"font-weight":"bold"}},P={class:"post-preview-wrapper"},W=_(()=>s("i",{class:"icon icon-clock"},null,-1)),z={class:"time"},H={key:2,class:"actions-block"},O={class:"item"},Q=_(()=>s("span",null,"Language: ",-1)),U={key:0,class:"tag lang_current"},G={key:2,style:{"font-weight":"bold"}},J={class:"item"},K=_(()=>s("span",null,"Download: ",-1)),X=_(()=>s("span",{style:{"font-weight":"bold"}},"○",-1)),Y={class:"item"},Z=_(()=>s("span",null,"Share: ",-1)),x=_(()=>s("span",null,"Copy link",-1)),ee={key:0,class:"item"},te=_(()=>s("span",null,"Platforms: ",-1)),ie=["href"],se={key:0,style:{"font-weight":"bold"}};function ne(e,t,l,c,m,g){const w=C,k=B;return i(),n(u,null,[s("div",I,[s("div",T,r(e.article.date),1),e.is_project?(i(),n("div",q,"○")):a("",!0),e.is_project?(i(),n("div",L,r(e.project_name),1)):a("",!0)]),s("div",N,[e.is_preview?(i(),p(w,{key:0,to:`/blog/${e.article.id}`},{default:y(()=>[v(r(e.article_title),1)]),_:1},8,["to"])):(i(),n("span",V,r(e.article_title),1))]),e.is_tags?(i(),n("div",D,[(i(!0),n(u,null,h(e.article.tags,(o,d)=>(i(),n("div",{key:d},[s("span",F,r(o),1),d!==e.article.tags.length-1?(i(),n("span",M,"○")):a("",!0)]))),128))])):a("",!0),e.is_preview?(i(),p(k,{key:1,uid:e.markdown_uid,markdown:e.preview_text_md},null,8,["uid","markdown"])):a("",!0),s("div",P,[e.is_preview?(i(),n("button",{key:0,onClick:t[0]||(t[0]=o=>e.$router.push(`/blog/${e.article.id}`))},"Read more")):a("",!0),W,s("div",z,r(e.time_of_read_min)+" min read",1)]),e.is_preview?a("",!0):(i(),n("div",H,[s("div",O,[Q,(i(!0),n(u,null,h(e.lang_links,(o,d)=>(i(),n("span",{key:d},[o.is_current?(i(),n("span",U,r(o.name),1)):(i(),p(w,{key:1,class:"tag link",to:o.route},{default:y(()=>[v(r(o.name),1)]),_:2},1032,["to"])),d!==e.lang_links.length-1?(i(),n("span",G,"○")):a("",!0)]))),128))]),s("div",J,[K,s("button",{class:"tag",onClick:t[1]||(t[1]=o=>e.download_pdf())},"PDF"),X,s("button",{class:"tag",onClick:t[2]||(t[2]=o=>e.download_md())},"Markdown")]),s("div",Y,[Z,s("button",{class:"tag",onClick:t[3]||(t[3]=o=>e.copy_link())},[x,s("span",{class:$(["copied_notification",{show:e.is_show_copied_notification}])},"Link copied!",2)])]),e.is_links?(i(),n("div",ee,[te,(i(!0),n(u,null,h(e.article.links,(o,d)=>(i(),n("span",{key:d},[s("a",{class:"tag link",href:o.url,target:"_blank",rel:"noopener"},r(o.name),9,ie),d!==e.article.links.length-1?(i(),n("span",se,"○")):a("",!0)]))),128))])):a("",!0)])),e.is_preview?a("",!0):(i(),p(k,{key:3,uid:e.markdown_uid,markdown:e.main_text_md},null,8,["uid","markdown"]))],64)}const re=A(E,[["render",ne],["__scopeId","data-v-642ba570"]]);export{re as _};
