SET SERVEROUTPUT ON;

DECLARE
    a NUMBER := 10;
    b NUMBER := 25;
    c NUMBER := 15;
BEGIN
    IF a>b AND a>c THEN
        DBMS_OUTPUT.PUT_LINE('Greatest Number = '||a);
    ELSIF b>a AND b>c THEN
        DBMS_OUTPUT.PUT_LINE('Greatest Number = '||b);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Greatest Number = '||c);
    END IF;
END;
/