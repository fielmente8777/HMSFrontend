// utils/validate.js
export function validateParams(storedId, storedHid, storedAuth, params) {
    const ndid = params.get("id");
    const hid = params.get("hid");
    const reservationid = params.get("reservationid");

    return {
        isIdValid: storedId === ndid,
        isHidValid: storedHid === hid,
        isValidAuth: storedAuth === reservationid,
        ndid,
        hid,
        reservationid,
    };
}
