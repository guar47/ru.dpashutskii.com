import React from 'react'
 import Disqus from 'disqus-react'
 import config from '../utils/siteConfig'
 
  class Comments extends React.Component {
   render() {
     const disqusShortname = config.discusShortName
     const disqusConfig = {
       identifier: this.props.id,
       title: this.props.title,
     }
 
      return (
       <div className="comments">
         <Disqus.DiscussionEmbed
           shortname={disqusShortname}
           config={disqusConfig}
         />
       </div>
     )
   }
 }
 
  export default Comments
