https://ko.javascript.info/alert-prompt-confirm
### alert, prompts, confirm을 이용한 상호작용
### Interaction using alert, prompts and confirm

> alert("Hello");

> result = prompt(title, [default]);

> result = confirm(question);



https://ko.javascript.info/type-conversions
### 형 변환 Type Conversion

함수(Function) 와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됩니다.

##### 문자형으로 변환

alert메서드는 문자형을 받기 때문에, alert(value)에서 value는 문자형이어야 합니다. 

만약, 다른 형의 값을 전달받으면 이 값은 문자형으로 자동 변환됩니다.
or
```
String(value)
``` 
함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있습니다.

##### 숫자형으로 변환
숫자형으로의 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어납니다.

```
Number(value)
```

함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있습니다.

한편, 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 됩니다. 


```
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```


##### 불린형으로 변환
Boolean(value)를 호출하면 명시적으로 불리언으로의 형 변환을 수행할 수 있습니다.

- 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다.
- 그 외의 값은 true로 변환됩니다.

```
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)
```
