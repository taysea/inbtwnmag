import React from "react"
import { Box } from "grommet"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  XShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  XIcon,
} from "react-share"

export const Share = ({ url }) => {
  return (
    <Box direction="row" gap="small">
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <XShareButton url={url}>
        <XIcon size={32} round />
      </XShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </Box>
  )
}
