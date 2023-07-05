// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDeviceList } from 'usb'

type Data = {
  devices: object
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const devices = getDeviceList()  
  res.status(200).json({ devices })
}
