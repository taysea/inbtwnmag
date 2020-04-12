import React from "react"
import { Box } from "grommet"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PocketShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PocketIcon,
  TwitterIcon,
} from "react-share"

export const Share = ({ url }) => {
  return (
    <Box direction="row" gap="small">
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <PocketShareButton url={url}>
        <PocketIcon size={32} round />
      </PocketShareButton>
    </Box>
  )
}
