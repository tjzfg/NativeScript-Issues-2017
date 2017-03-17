"use strict";
function onLoaded(args) {
    var page = args.object;
    var scroll = page.getViewById("scroll");
    scroll.android.setScrollbarFadingEnabled(false);
    scroll.android.setVerticalScrollBarEnabled(true);
    scroll.android.setVerticalFadingEdgeEnabled(false);
    scroll.android.scrollBarDefaultDelayBeforeFade = 5000;
    scroll.android.scrollbarFadeDuration = 0;
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxrQkFBeUIsSUFBZTtJQUNwQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsR0FBRyxJQUFJLENBQUM7SUFDdEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQVhELDRCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkgeyBcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgdmFyIHNjcm9sbCA9IDxTY3JvbGxWaWV3PnBhZ2UuZ2V0Vmlld0J5SWQoXCJzY3JvbGxcIik7XG5cbiAgICBzY3JvbGwuYW5kcm9pZC5zZXRTY3JvbGxiYXJGYWRpbmdFbmFibGVkKGZhbHNlKTtcbiAgICBzY3JvbGwuYW5kcm9pZC5zZXRWZXJ0aWNhbFNjcm9sbEJhckVuYWJsZWQodHJ1ZSk7XG4gICAgc2Nyb2xsLmFuZHJvaWQuc2V0VmVydGljYWxGYWRpbmdFZGdlRW5hYmxlZChmYWxzZSk7XG5cbiAgICBzY3JvbGwuYW5kcm9pZC5zY3JvbGxCYXJEZWZhdWx0RGVsYXlCZWZvcmVGYWRlID0gNTAwMDtcbiAgICBzY3JvbGwuYW5kcm9pZC5zY3JvbGxiYXJGYWRlRHVyYXRpb24gPSAwO1xufSJdfQ==