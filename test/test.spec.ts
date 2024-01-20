import { isValidWalk } from "../src/main";

describe("isValidWalk", function() {
    it("should return true for a valid walk", function(){
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toEqual(true);
    });

    it("should return false for an invalid walk", function(){
        expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toEqual(false);
        expect(isValidWalk(['w'])).toEqual(false);
        expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toEqual(false);
    });
});