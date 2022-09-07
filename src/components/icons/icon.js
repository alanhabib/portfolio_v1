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

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <FaApple />
    case 'Aws':
      return <FaAws />
    case 'Envelope':
      return <FaRegEnvelope />
    case 'Bookmark':
      return <FaBookmark />
    case 'Calendly':
      return <FaRegCalendarAlt />
    case 'Codepen':
      return <FaCodepen />
    case 'External':
      return <FaExternalLinkAlt />
    case 'Folder':
      return <FaRegFolder />
    case 'GitHub':
      return <FaGithub />
    case 'Instagram':
      return <FaInstagram />
    case 'Linkedin':
      return <FaLinkedinIn />
    case 'Loader':
      return <FaCloudDownloadAlt />
    case 'PlayStore':
      return <FaGooglePlay />
    case 'Star':
      return <FaRegStar />
    case 'Twitter':
      return <FaTwitterSquare />
    default:
      return <FaExternalLinkAlt />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
