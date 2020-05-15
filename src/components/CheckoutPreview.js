import React from "react"
import { Table, TableBody, TableRow, TableCell, Text } from "grommet"
import { formatPrice } from "../utils"

const calculateTotal = cart => {
  let total = 0
  const currency = cart[0].currency
  cart.forEach(item => {
    total += item.price * item.quantity
  })

  return formatPrice(total, currency)
}

export const CheckoutPreview = ({ cart }) => {
  let total
  if (cart.length) total = calculateTotal(cart)
  else total = "TBD"

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell scope="row">
            <Text size="xsmall">Subtotal</Text>
          </TableCell>
          <TableCell align="end">
            <Text size="xsmall">{total}</Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <Text size="xsmall">Shipping</Text>
          </TableCell>
          <TableCell align="end">
            <Text size="xsmall">TBD</Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <Text size="xsmall" weight="bold">
              Total
            </Text>
          </TableCell>
          <TableCell align="end">
            <Text size="xsmall" weight="bold">
              {total}
            </Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
