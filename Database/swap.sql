DECLARE
    a NUMBER := 10;
    b NUMBER := 20;
    temp NUMBER;
BEGIN
    temp := a;
    a := b;
    b := temp;

    DBMS_OUTPUT.PUT_LINE('A = '||a);
    DBMS_OUTPUT.PUT_LINE('B = '||b);
END;
/