webpackJsonp([0xe02e0fedb7a2],{723:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re releasing an update to address a potential XSS vulnerability that can\t arise when using user data as a <code class="gatsby-code-text">key</code>. Typically “safe” data is used for a <code class="gatsby-code-text">key</code>, for example, an id from your database, or a unique hash. However there are cases where it may be reasonable to use user generated content. A carefully crafted piece of content could result in arbitrary JS execution. While we make a very concerted effort to ensure all text is escaped before inserting it into the DOM, we missed one case. Immediately following the discovery of this vulnerability, we performed an audit to ensure we this was the only such vulnerability.</p>\n<p>This only affects v0.5.x and v0.4.x. Versions in the 0.3.x family are unaffected.</p>\n<p>Updated versions are available for immediate download via npm, bower, and on our <a href="/react/downloads.html">download page</a>.</p>\n<p>We take security very seriously at Facebook. For most of our products, users don’t need to know that a security issue has been fixed. But with libraries like React, we need to make sure developers using React have access to fixes to keep their users safe.</p>\n<p>While we’ve encouraged responsible disclosure as part of <a href="https://www.facebook.com/whitehat/">Facebook’s whitehat bounty program</a> since we launched, we don’t have a good process for notifying our users. Hopefully we don’t need to use it, but moving forward we’ll set up a little bit more process to ensure the safety of our users. Ember.js has <a href="http://emberjs.com/security/">an excellent policy</a> which we may use as our model.</p>\n<p>You can learn more about the vulnerability discussed here: <a href="https://groups.google.com/forum/#!topic/reactjs/OIqxlB2aGfU">CVE-2013-7035</a>.</p>',excerpt:"Today we’re releasing an update to address a potential XSS vulnerability that can\t arise when using user data as a  . Typically “safe” data is used for a  , for example, an id from your database, or a unique hash. However there are cases where it may be reasonable to use user generated content. A carefully crafted piece of content could result in arbitrary JS execution. While we make a very concerted effort to ensure all text is escaped before inserting it into the DOM, we missed one case…",frontmatter:{title:"React v0.5.2, v0.4.2",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"December 17, 2013",path:"blog/2013-12-18-react-v0.5.2-v0.4.2.md",slug:"/blog/2013/12/18/react-v0.5.2-v0.4.2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2013/12/18/react-v0.5.2-v0.4.2.html"}}}});
//# sourceMappingURL=path---blog-2013-12-18-react-v-0-5-2-v-0-4-2-html-c77956c8ebfaeed71cba.js.map