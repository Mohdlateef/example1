 enum ValueType {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    DeviceType = "deviceType",
    Date = "date",
}

 enum SegmentOperation {
    containsAny = "contains_any",
    notContainsAny = "not_contains_any",
    isEmpty = "is_empty",
    isNotEmpty = "is_not_empty",
    containsAll = "contains_all",
    notContainsAll = "not_contains_all",
    equalTo = "equal_to",
    greaterThan = "greater_than",
    greaterThanEqualTo = "greater_than_equal_to",
    lessThan = "less_than",
    lessThanEqualTo = "less_than_equal_to",
    dateEqualTo = "date_equal_to",
    dateGreaterThan = "date_greater_than",
    dateGreaterThanEqualTo = "date_greater_than_equal_to",
    dateLessThan = "date_less_than",
    dateLessThanEqualTo = "date_less_than_equal_to",
  }
const SegmentOperations = [
    { key: SegmentOperation.containsAny, label: "contains any of" },
    { key: SegmentOperation.notContainsAny, label: "does not contain any of" },
    { key: SegmentOperation.isEmpty, label: "is empty" },
    { key: SegmentOperation.isNotEmpty, label: "is not empty" },
    { key: SegmentOperation.containsAll, label: "contains all" },
    { key: SegmentOperation.notContainsAll, label: "does not contain all" },
    {
      key: SegmentOperation.equalTo,
      label: "is equal to",
      valueType: ValueType.Number,
    },
    {
      key: SegmentOperation.greaterThan,
      label: "is greater than",
      valueType: ValueType.Number,
    },
    {
      key: SegmentOperation.greaterThanEqualTo,
      label: "is greater than equal to",
      valueType: ValueType.Number,
    },
    {
      key: SegmentOperation.lessThan,
      label: "is less than",
      valueType: ValueType.Number,
    },
    {
      key: SegmentOperation.lessThanEqualTo,
      label: "is less than equal to",
      valueType: ValueType.Number,
    },
    {
      key: SegmentOperation.dateEqualTo,
      label: "is equal to",
      valueType: ValueType.Date,
    },
    {
      key: SegmentOperation.dateGreaterThan,
      label: "is greater than",
      valueType: ValueType.Date,
    },
    {
      key: SegmentOperation.dateGreaterThanEqualTo,
      label: "is greater than equal to",
      valueType: ValueType.Date,
    },
    {
      key: SegmentOperation.dateLessThan,
      label: "is less than",
      valueType: ValueType.Date,
    },
    {
      key: SegmentOperation.dateLessThanEqualTo,
      label: "is less than equal to",
      valueType: ValueType.Date,
    },
  ];
   const BasicSegmentOperators = SegmentOperations.filter((o) =>
    [SegmentOperation.isEmpty, SegmentOperation.isNotEmpty].includes(o.key)
  );
  
   const GeneralSegmentOperators = SegmentOperations.filter(
    (o) => !o.valueType
  );
  console.log("test")