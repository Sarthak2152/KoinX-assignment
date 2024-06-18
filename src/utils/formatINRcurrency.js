export const formatINRCurrency = function (amountStr) {
  try {
    const amount = parseFloat(amountStr);
    if (isNaN(amount)) {
      return 0;
    }
    const formattedAmount = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
    return formattedAmount;
  } catch (error) {
    return error.message;
  }
};
