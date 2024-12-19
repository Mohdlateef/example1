var ValueType;
(function (ValueType) {
    ValueType["String"] = "string";
    ValueType["Number"] = "number";
    ValueType["Boolean"] = "boolean";
    ValueType["DeviceType"] = "deviceType";
    ValueType["Date"] = "date";
})(ValueType || (ValueType = {}));
var SegmentOperation;
(function (SegmentOperation) {
    SegmentOperation["containsAny"] = "contains_any";
    SegmentOperation["notContainsAny"] = "not_contains_any";
    SegmentOperation["isEmpty"] = "is_empty";
    SegmentOperation["isNotEmpty"] = "is_not_empty";
    SegmentOperation["containsAll"] = "contains_all";
    SegmentOperation["notContainsAll"] = "not_contains_all";
    SegmentOperation["equalTo"] = "equal_to";
    SegmentOperation["greaterThan"] = "greater_than";
    SegmentOperation["greaterThanEqualTo"] = "greater_than_equal_to";
    SegmentOperation["lessThan"] = "less_than";
    SegmentOperation["lessThanEqualTo"] = "less_than_equal_to";
    SegmentOperation["dateEqualTo"] = "date_equal_to";
    SegmentOperation["dateGreaterThan"] = "date_greater_than";
    SegmentOperation["dateGreaterThanEqualTo"] = "date_greater_than_equal_to";
    SegmentOperation["dateLessThan"] = "date_less_than";
    SegmentOperation["dateLessThanEqualTo"] = "date_less_than_equal_to";
})(SegmentOperation || (SegmentOperation = {}));
var SegmentOperations = [
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
var BasicSegmentOperators = SegmentOperations.filter(function (o) {
    return [SegmentOperation.isEmpty, SegmentOperation.isNotEmpty].includes(o.key);
});
var GeneralSegmentOperators = SegmentOperations.filter(function (o) { return !o.valueType; });
console.log(BasicSegmentOperators)
console.log(GeneralSegmentOperators)
