import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const currencies = [
  {
    value: "ARS",
    label: "$",
  },
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "GBP",
    label: "£",
  },
];

const CurrencyField = (props) => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    props.onChange({
      currency,
      amount,
    });
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    props.onChange({
      currency,
      amount,
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="currency-label">Moneda</InputLabel>
        <Select
          labelId="currency-label"
          id="currency-select"
          value={currency}
          label="Currency"
          onChange={handleCurrencyChange}
        >
          {currencies.map((currency) => (
            <MenuItem key={currency.value} value={currency.value}>
              {`${currency.value} ${currency.label}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Total"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{currency}</InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default CurrencyField;
