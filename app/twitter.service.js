System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getTweets = function () {
                    return [
                        {
                            title: 'Windward',
                            address: '@windwardstudios',
                            description: 'Looking for a better company reporting tool?',
                            votes: 0
                        }
                    ];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map