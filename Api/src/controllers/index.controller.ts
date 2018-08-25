import * as T from './test.controller';
import * as T2 from './test2.controller';

export namespace Controllers {
    export import Test = T.Test;
    export import Test2 = T.Test;
}
