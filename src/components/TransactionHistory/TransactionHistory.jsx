import React from "react";
import {
  TableStyled,
  TbodyStyled,
  TheadStyled,
  TrStyled,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ transactions }) => {
  return (
    <TableStyled>
      <TheadStyled>
        <TrStyled>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TrStyled>
      </TheadStyled>
      <TbodyStyled>
        {transactions.map((i) => {
          return (
            <TrStyled key={i.id}>
              <td>{i.type}</td>
              <td>{i.amount}</td>
              <td>{i.currency}</td>
            </TrStyled>
          );
        })}
      </TbodyStyled>
    </TableStyled>
  );
};

export default TransactionHistory;
