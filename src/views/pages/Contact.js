import { Helmet } from "react-helmet";
import thumbnail from "../../assets/images/thumbnail.png";

const Contact = props => {
    return (
      <div>
      <Helmet>
      
      <title>Contact | RepoHub</title>
      <meta name="title" content="RepoHub"></meta>
      <meta name="description" content="React tutorial project"></meta>


      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://github.com"></meta>
      <meta property="og:title" content="RepoHub"></meta>
      <meta property="og:description" content="React tutorial project"></meta>
      <meta property="og:image" content={thumbnail}></meta>


      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://github.com"></meta>
      <meta property="twitter:title" content="RepoHub"></meta>
      <meta property="twitter:description" content="React tutorial project"></meta>
      <meta property="twitter:image" content={thumbnail}></meta>
      </Helmet>
      </div>
    )
  }
  export default Contact;