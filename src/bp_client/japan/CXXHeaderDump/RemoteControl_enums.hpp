enum class EExposedFieldType {
    Invalid = 0,
    Property = 1,
    Function = 2,
    EExposedFieldType_MAX = 3,
};

enum class ERCAccess {
    NO_ACCESS = 0,
    READ_ACCESS = 1,
    WRITE_ACCESS = 2,
    WRITE_TRANSACTION_ACCESS = 3,
    ERCAccess_MAX = 4,
};

enum class ERCBindingStatus {
    Unassigned = 0,
    Awaiting = 1,
    Bound = 2,
    ERCBindingStatus_MAX = 3,
};

namespace ERemoteControlEnum {
    enum Type {
        E_One = 0,
        E_Two = 1,
        E_Three = 2,
        E_MAX = 3,
    };
}

enum class ERemoteControlEnumClass {
    E_One = 0,
    E_Two = 1,
    E_Three = 2,
    E_MAX = 3,
};

