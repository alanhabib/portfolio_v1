import React from 'react'
import PropTypes from 'prop-types'
import {
  FaApple,
  FaGooglePlay,
  FaRegStar,
  FaTwitterSquare,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaCodepen,
  FaBookmark,
  FaExternalLinkAlt,
  FaRegFolder,
  FaCloudDownloadAlt,
  FaRegCalendarAlt,
  FaAws,
  FaRegEnvelope,
} from 'react-icons/fa'

const Icon = ({ name, style }) => {
  switch (name) {
    case 'AppStore':
      return <FaApple style={style} />
    case 'Aws':
      return <FaAws style={style} />
    case 'Envelope':
      return <FaRegEnvelope style={style} />
    case 'Bookmark':
      return <FaBookmark style={style} />
    case 'Calendly':
      return <FaRegCalendarAlt style={style} />
    case 'Codepen':
      return <FaCodepen style={style} />
    case 'External':
      return <FaExternalLinkAlt style={style} />
    case 'Folder':
      return <FaRegFolder style={style} />
    case 'GitHub':
      return <FaGithub style={style} />
    case 'Instagram':
      return <FaInstagram style={style} />
    case 'Linkedin':
      return <FaLinkedinIn style={style} />
    case 'Loader':
      return <FaCloudDownloadAlt style={style} />
    case 'PlayStore':
      return <FaGooglePlay style={style} />
    case 'Star':
      return <FaRegStar style={style} />
    case 'Twitter':
      return <FaTwitterSquare style={style} />
    default:
      return <FaExternalLinkAlt style={style} />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
