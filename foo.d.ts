// ***BitmapPaint/***

interface BitmapPaint extends Paint {
/** Defines the rotation of the [BitmapPaint][api.type.BitmapPaint] image. */
rotation?: Number;
/** Defines the __x__ scale factor of the [BitmapPaint][api.type.BitmapPaint] image, for example, `1` equals 100%, `0.5` equals 50%, and `2` equals 200%. */
scaleX?: Number;
/** Defines the __y__ scale factor of the [BitmapPaint][api.type.BitmapPaint] image, for example, `1` equals 100%, `0.5` equals 50%, and `2` equals 200%. */
scaleY?: Number;
/** This value is used to offset a repeating bitmap fill by a ratio of its width.

Instead of using a specific pixel value for this property, a value between `-1` and `1` is required. This tells the GPU to offset the pattern by a full repetition in the horizontal direction. So, using `0.5` will shift the pattern half of one repetition distance on the __x__ axis.

An important distinction is that setting a positive value will shift the pattern to the left, while a negative value will shift the object to the right. */
x?: Number;
/** This value is used to offset a repeating bitmap fill by a ratio of its height.

Instead of using a specific pixel value for this property, a value between `-1` and `1` is required. This tells the GPU to offset the pattern by a full repetition in the vertical direction. So, using `0.5` will shift the pattern half of one repetition distance on the __y__ axis.

An important distinction is that setting a positive value will shift the pattern in an upward direction, while a negative value will shift the object downward. */
y?: Number;
}


// ***Body/***

interface Body extends Object {
/** The numerical value for how much the body's rotation should be damped. The default is zero&nbsp;(`0`). There is no minimum or maximum value &mdash; just adjust to get the desired results. */
angularDamping?: Number;
/** The numerical value of the current angular (rotational) velocity, in degrees per second. There is no minimum or maximum value &mdash; just adjust to get the desired results. */
angularVelocity?: Number;
/** A string value for the type of physical body being simulated. Possible values include:

* `"dynamic"` &mdash; dynamic bodies are fully simulated. They can be moved manually in code, but normally they move according to forces like gravity or reactionary collision forces. This is the default body type for physical objects in Box2D. Dynamic bodies can collide with all body types.

* `"static"` &mdash; static bodies does not move under simulation and they behave as if they have infinite mass. Static bodies can be moved manually by the user, but they do not accept the application of velocity. Static bodies collide only with dynamic bodies, not with other static bodies or kinematic bodies.

* `"kinematic"` &mdash; kinematic bodies move under simulation only according to their velocity. Kinematic bodies will not respond to forces like gravity. They can be moved manually by the user, but normally they are moved by setting their velocities. Kinematic bodies collide only with dynamic bodies, not with other kinematic bodies or static bodies. */
bodyType?: String;
/** Use the `gravityScale` property to adjust the gravity on a single body. For example, setting it to `0` makes the body float (no&nbsp;gravity). The default value is `1.0` which means the body will behave under the normal simulated gravity. */
gravityScale?: Number;
/** A [boolean][api.type.Boolean] for the body's current "awake" state. By default, all bodies automatically "sleep" when nothing interacts with them for a couple of seconds. At this point, they stop being simulated until something like a collision wakes them up. The `isAwake` property can either fetch a body's current state or forcibly wake it up. */
isAwake?: Boolean;
/** Used to set or get the body's current active state. Inactive bodies are not destroyed but they are removed from the physics simulation and cease to interact with other bodies. */
isBodyActive?: Boolean;
/** A boolean for whether the body should be treated as a "bullet." Bullets are subject to continuous collision detection rather than periodic collision detection at world time steps. This is more computationally expensive but it can prevent <nobr>fast-moving</nobr> objects from passing through solid barriers. The default is `false`. */
isBullet?: Boolean;
/** A boolean for whether the rotation of the body should be locked, even if the body is under load or subjected to <nobr>off-center</nobr> forces. The default is `false`.

<div class="docs-tip-outer docs-tip-color-alert">
<div class="docs-tip-inner-left">
<div class="fa fa-exclamation-circle" style="font-size: 35px;"></div>
</div>
<div class="docs-tip-inner-right">

It's critical that you set this body property __after__ the object is already made into a physical object via [physics.addBody()][api.library.physics.addBody]. If you apply this property __before__ the [physics.addBody()][api.library.physics.addBody] command for the object, it will merely be treated as a property of the object like any other custom property and, in that case, it will __not__ cause any physical change in terms of locking rotation.

</div>
</div> */
isFixedRotation?: Boolean;
/** A sensor is a fixture that detects collisions but does not produce a physical response. Sensors do not generate contact points.

The `isSensor` property is a <nobr>set-only</nobr> boolean value that, if set to `true`, prevents any visible collisions from happening to the object, although `"began"` and `"ended"` collision events are still fired. */
isSensor?: Boolean;
/** A [boolean][api.type.Boolean] for whether a body is allowed to "sleep." The default is `true`. */
isSleepingAllowed?: Boolean;
/** The numerical value for how much the body's linear motion is damped. The default is zero&nbsp;(`0`). */
linearDamping?: Number;
/** A read-only value representing the body's mass. */
mass?: Number;
/** Similar to [object:applyTorque()][api.type.Body.applyTorque] except that an angular impulse is a single momentary jolt. */
applyAngularImpulse(appliedForce: Number): void;
/** A function that accepts __x__ and __y__ components of a linear force, applied at a given point with __x__ and __y__ world coordinates. If the target point is the body's center of mass, it will tend to push the body in a straight line; if the target is offset from the body's center of mass, the body will spin about its center of mass.

For symmetrical objects, the center of mass and the center of the object will have the same position ([object.x][api.type.DisplayObject.x] and [object.y][api.type.DisplayObject.y]).

Note that the amount of force required to move heavy objects may need to be fairly high. */
applyForce(xForce: Number, yForce: Number, bodyX: Number, bodyY: Number): void;
/** Similar to [object:applyForce()][api.type.Body.applyForce] except that an impulse is a single momentary jolt. */
applyLinearImpulse(xForce: Number, yForce: Number, bodyX: Number, bodyY: Number): void;
/** A function that accepts a numerical value for applied rotational force. The body will rotate about its center of mass. */
applyTorque(appliedForce: Number): void;
/** A function that returns the __x__ and __y__ components for the body's linear velocity, in pixels per second. */
getLinearVelocity(): Number;
/** A function that returns the __x__ and __y__ components for the body's local center of mass. */
getMassLocalCenter(): Number;
/** A function that returns the __x__ and __y__ components for the body's center of mass in content coordinates. */
getMassWorldCenter(): Number;
/** If the default mass data for the body has been overridden, this function resets it to the mass calculated from the shapes. */
resetMassData(): void;
/** This function accepts __x__ and __y__ components for the body's linear velocity, in pixels per second. */
setLinearVelocity(xVelocity: Number, yVelocity: Number): void;
}


// ***ButtonWidget/***

interface ButtonWidget extends ShapeObject {
/** Sets/updates the [ButtonWidget][api.type.ButtonWidget] label text. */
setLabel(label: String): void;
/** Returns the [ButtonWidget][api.type.ButtonWidget] label text as a string. */
getLabel(): String;
/** Sets the [ButtonWidget][api.type.ButtonWidget] as either enabled or disabled. */
setEnabled(isEnabled: Boolean): void;
}


// ***CirclePath/***

interface CirclePath extends Path {
}


// ***CompositePaint/***

interface CompositePaint extends Paint {
}


// ***CoronaLibrary/***

interface CoronaLibrary extends Table {
/** undefined */
name?: String;
/** undefined */
publisherId?: String;
/** undefined */
revision?: Number;
/** undefined */
version?: Number;
/** Returns the currently set provider for the library. */
getCurrentProvider(): CoronaProvider;
/** Sets the current provider for the library. */
setCurrentProvider(provider: CoronaProvider): void;
}


// ***CoronaPrototype/***

interface CoronaPrototype extends Table {
}


// ***CoronaProvider/***

interface CoronaProvider extends CoronaPrototype {
}


// ***DisplayObject/***

interface DisplayObject extends EventDispatcher {
/** This property represents the alpha value of a [display object][api.type.DisplayObject]. Use it to set or retrieve the object's opacity. A value of `0` is transparent and `1.0` is fully opaque.

This property is often used in the [transition.to()][api.library.transition.to] function to fade in/out an object over time. */
alpha?: Number;
/** This property allows you to control the alignment of the object along the __x__ direction.

In general, the anchors of an object control how geometry is positioned relative to the object's origin. A value of `0` corresponds to left alignment, meaning the left edge of the object is aligned with the origin. A value of `0.5` corresponds to center alignment. A value of `1` corresponds to right alignment.

By default, anchor values must range from `0.0` to `1.0` and the anchor of new objects is set to `0.5`, however these defaults can be modified (see&nbsp;below). */
anchorX?: Number;
/** This property allows you to control the alignment of the object along the __y__ direction.

In general, the anchors of an object control how geometry is positioned relative to the object's origin. A value of `0` corresponds to top alignment, meaning the top edge of the object is aligned with the origin. A value of `0.5` corresponds to center alignment. A value of `1` corresponds to bottom alignment.

By default, anchor values must range from `0.0` to `1.0` and the anchor of new objects is set to `0.5`, however these defaults can be modified (see&nbsp;below). */
anchorY?: Number;
/** Allows you to change the blend mode on a specific object. 

See [fill.blendMode][api.type.Paint.blendMode] for a complete list of blend modes. */
blendMode?: String;
/** A read-only table with properties `xMin`, `xMax`, `yMin`, `yMax` that represent the boundaries of a [display object][api.type.DisplayObject], in content coordinates. */
contentBounds?: any;
/** The read-only height of the object in content coordinates. This is similar to [object.height][api.type.DisplayObject.height] except that its value is affected by __y__ scaling and rotation. */
contentHeight?: Number;
/** The read-only width of the object in content coordinates. This is similar to [object.width][api.type.DisplayObject.width] except that its value is affected by __x__ scaling and rotation. */
contentWidth?: Number;
/** Retrieve or change the height of a display object. For [text][api.library.display.newText] objects, this property can be used to get (but&nbsp;not&nbsp;set) the height.

For images, the returned value is the original bitmap height, including any transparent area. */
height?: Number;
/** Limits touch events to the masked portion of the object. This property can be read or set.

By default this property is `true`, meaning touch events for the object only occur on the masked portion of the object. Setting this property to `false` generates touch events when a touch occurs on any portion of the object.

Currently, for an image mask created by [graphics.newMask()][api.library.graphics.newMask], the touch sensitive area corresponds to the image bounds, i.e. it is rectangular regardless of the image contents. */
isHitTestMasked?: Boolean;
/** Allows an object to continue to receive hit events even if it is not visible. If `true`, objects will receive hit events regardless of visibility; if `false`, events are only sent to visible objects. Defaults to `false`. */
isHitTestable?: Boolean;
/** Controls whether the object is visible on the screen. The property is also readable. The default is `true`. */
isVisible?: Boolean;
/** Retrieve or set the rotation of the display object's corresponding [mask][api.type.Mask] object, if one exists. */
maskRotation?: Number;
/** Retrieve or set the __x__-scale factor for the display object's corresponding [mask][api.type.Mask] object, if any. */
maskScaleX?: Number;
/** Retrieves or sets the __y__-scale factor for the display object's corresponding [mask][api.type.Mask] object, if any. */
maskScaleY?: Number;
/** Retrieve or set the __x__ position of the [mask][api.type.Mask] applied to the display object using [object:setMask()][api.type.DisplayObject.setMask]. */
maskX?: Number;
/** Retrieve or set the __y__ position of the [mask][api.type.Mask] applied to the display object using [object:setMask()][api.type.DisplayObject.setMask]. */
maskY?: Number;
/** A read-only property that returns the object's parent. */
parent?: GroupObject;
/** Sets the rotation of an object in degrees; this rotation is based in the clockwise direction where `0` is directly upward. The rotation occurs around the object's anchor point.

Rotation can also be set using the [object:rotate()][api.type.DisplayObject.rotate] function. */
rotation?: Number;
/** Retrieve or change the width of a display object. For [text][api.library.display.newText] objects, this property can be used to get (but&nbsp;not&nbsp;set) the width.

For images, the returned value is the original bitmap width, including any transparent area. */
width?: Number;
/** Specifies the __x__ position (in local coordinates) of the object relative to its [parent][api.type.DisplayObject.parent] &mdash; specifically, the __x__ position of the object's [anchorX][api.type.DisplayObject.anchorX] point relative to its parent. Changing this value will move the object in the __x__ direction. */
x?: Number;
/** Retrieve or change the scale of the object in the __x__ direction. The scaling occurs around the object's anchor point.

You can flip a [display object][api.type.DisplayObject] horizontally by passing a negative value to `object.xScale` as seen in the example below.

Valid examples include `1.0` for 100%, `2.0` for 200%, or `0.5` for 50%. */
xScale?: Number;
/** Specifies the __y__ position (in local coordinates) of the object relative to its [parent][api.type.DisplayObject.parent] &mdash; specifically, the __y__ position of the object's [anchorY][api.type.DisplayObject.anchorY] point relative to its parent. Changing this value will move the object in the __y__ direction. */
y?: Number;
/** Retrieve or change the scale of the object in the __y__ direction. The scaling occurs around the object's anchor point.

You can flip a [display object][api.type.DisplayObject] vertically by passing a negative value to `object.yScale` as seen in the example below.

Valid examples include `1.0` for 100%, `2.0` for 200%, or `0.5` for 50%. */
yScale?: Number;
/** Read-only property that provides the file and line number where the object was created.

For further introspection options, see [object._lastChange][api.type.DisplayObject.lastChange] and [object._properties][api.type.DisplayObject.properties]. */
_defined?: String;
/** Read-only property that provides the file and line number of the last change to any of the object's properties.

For further introspection options, see [object._defined][api.type.DisplayObject.defined] and [object._properties][api.type.DisplayObject.properties]. */
_lastChange?: String;
/** Read-only property that provides a view into all of the object's property values.

For further introspection options, see [object._defined][api.type.DisplayObject.defined] and [object._lastChange][api.type.DisplayObject.lastChange]. */
_properties?: String;
/** Maps the given __x__ and __y__ values in content ([stage][api.type.StageObject]) coordinates to the target object's local coordinates (center point). */
contentToLocal(xContent: undefined, yContent: undefined): Number;
/** Maps the given __x__ and __y__ coordinates of an object to content ([stage][api.type.StageObject]) coordinates.

This method is useful for comparing the location of display objects in different groups. When a display object is inserted into a group, the core __x__ and __y__ properties for the object are relative to its group (parent) and not the content (stage). `object:localToContent()` can be used to return the actual content coordinates of an object, independent of its parent group.

This method is also useful to determine the content coordinates of a specific off-center point on an object, even one that is rotated or scaled. For example, you can pass an __x__ and __y__ value relative to the object's center and retrieve the specific location of that point in content (stage) coordinates. See the example code below.

Note that this method is similar to [object.contentBounds][api.type.DisplayObject.contentBounds], but it returns a specific coordinate point, not the bounding limits of the object. */
localToContent(x: Number, y: Number): Number;
/** Removes the display object and frees its memory, assuming there are no other references to it. This is equivalent to calling [group:remove()][api.type.GroupObject.remove] on the same display object, but it is syntactically simpler. The `object:removeSelf()` syntax is also supported in other cases, such as removing physics joints in the physics engine.

When you remove a display object, event listeners that are attached to it&nbsp;&mdash; tap and touch listeners, for example&nbsp;&mdash; are also freed from memory. You don't need to explicitly remove event listeners that are isolated to the object. See the [Display&nbsp;Objects][guide.media.displayObjects] guide for further details on object removal.

The `object:removeSelf()` method converts a display object into a normal Lua table that will be garbage collected if there are not other references to the object. You should also set the object to `nil` after removing it. */
removeSelf(): DisplayObject;
/** Effectively adds a value (`deltaAngle`) to the object's current [rotation][api.type.DisplayObject.rotation]. This rotation is based on degrees in the clockwise direction. The rotation occurs around the object's anchor point.

Use [object.rotation][api.type.DisplayObject.rotation] to set (or&nbsp;get) the current rotation value of the object. */
rotate(deltaAngle: Number): void;
/** Effectively multiplies the size of a display object by `xScale` and `yScale` respectively. The scaling occurs around the object's anchor point.

Valid examples include `1.0` for 100%, `2.0` for 200%, or `0.5` for 50%.

You can flip a [display object][api.type.DisplayObject] horizontally or vertically by passing a negative value to [object:scale()][api.type.DisplayObject.scale] as seen in the example below. */
scale(xScale: Number, yScale: Number): void;
/** Associates a mask with a display object. To remove an object's mask, use `object:setMask( nil )`. You can modify a display object's mask __x__ and __y__ position ([object.maskX][api.type.DisplayObject.maskX], [object.maskY][api.type.DisplayObject.maskY]), __x-scale__ and __y-scale__ factors ([object.maskScaleX][api.type.DisplayObject.maskScaleX], [object.maskScaleY][api.type.DisplayObject.maskScaleY]), and rotation ([object.maskRotation][api.type.DisplayObject.maskRotation]).

For a walkthrough on how to use image masks, see the [Masking Images][guide.media.imageMask] guide. */
setMask(mask: Mask): void;
/** Moves the target object to the visual back of its parent group ([object.parent][api.type.DisplayObject.parent]). */
toBack(): void;
/** Moves the target object to the visual front of its parent group ([object.parent][api.type.DisplayObject.parent]). */
toFront(): void;
/** Effectively adds values to the [object.x][api.type.DisplayObject.x] and [object.y][api.type.DisplayObject.y] properties of an object, thus changing its screen position. */
translate(deltaX: Number, deltaY: Number): void;
}


// ***EmitterObject/***

interface EmitterObject extends DisplayObject {
/** Starts the emission of particles from an [EmitterObject][api.type.EmitterObject] if the emitter is [stopped][api.type.EmitterObject.stop], or resumes the emission of particles if the emitter is [paused][api.type.EmitterObject.pause].

<div class="guide-notebox-imp">
<div class="notebox-title-imp">Important</div>

* Emitters begin in the "playing" state and do not need to be "started" by default.

* If you start an emitter from a "stopped" state, and there are existing particles from the emitter on screen <nobr>(from a previously-started emission)</nobr>, all existing particles will instantly be removed.

</div> */
/** Stops the emission of particles from an [EmitterObject][api.type.EmitterObject]. This function allows the currently active particles to finish their cycle naturally.

To remove all particles instantly, use [object:removeSelf()][api.type.DisplayObject.removeSelf] on the [EmitterObject][api.type.EmitterObject]. */
/** Pauses (freezes) the [EmitterObject][api.type.EmitterObject]. No particles will be added, removed, or animated while an emitter is paused. */
}


// ***EventDispatcher/***

interface EventDispatcher {
/** Adds a listener to the object's list of listeners. When the named event occurs, the listener will be invoked and be supplied with a table representing the event.

Returns `true` if your listener was successfully added to the [EventDispatcher][api.type.EventDispatcher], [Runtime][api.type.Runtime], [DisplayObject][api.type.DisplayObject], etc. Returns `nil` if you have invalid arguments, such as the listener not being a function or if it's a table that doesn't have a function matching the event name. */
addEventListener(eventName: String, listener: Listener): Boolean;
/** Dispatches specified `event` to object. The event parameter must be a table with a `name` property which is a [string][api.type.String] identifying the type of event. This method is available for any [DisplayObject][api.type.DisplayObject] or the global [Runtime][api.type.Runtime] object, if it has a listener registered to receive name events. We recommend you also include a `target` property in your event to the event so that your listener can know which object received the event.

In Corona, you can register custom events with both [DisplayObjects][api.type.DisplayObject] or the global [Runtime][api.type.Runtime] object. In both cases, you will have to manually dispatch the event yourself using this object method. */
dispatchEvent(event: any): void;
/** Removes the specified listener from the object's list of listeners so that it no longer is notified of events corresponding to the specified event.

Returns a [boolean][api.type.Boolean] value indicating if the given listener was successfully removed. Will return `false` if given invalid arguments or if the given listener does not exist in the internal listener list. */
removeEventListener(eventName: String, listener: Listener): Boolean;
}


// ***File/***

interface File {
/** Closes the open file (file is returned from [io.open()][api.library.io.open]).

Note that files are automatically closed when their handles are garbage collected, but that takes an unpredictable amount of time to happen. */
/** Commits the file's output buffer. Saves any written data to the file. */
/** Returns an iterator function that, each time it is called, returns a new line from the file.

This function is similar to [io.lines()][api.library.io.lines] except the file must be open first (with [io.open()][api.library.io.open]) and does not automatically close at the end of the file. */
/** Reads a file, according to the given formats which specify what to read. For each format, the function returns a [string][api.type.String] or a [number][api.type.Number] with the characters read, or `nil` if it cannot read data with the specified format. When called without formats, it uses a default format that reads the entire next line. */
/** Sets and gets the file position, measured from the beginning of the file, to the position given by offset plus a base.

The function can be used to get the current file position (`"cur"`) or `"set"` the file position to the beginning, end, or any position between.

In case of success, the function returns the file position as a [Number][api.type.Number], measured in bytes from the beginning of the file. If this function fails, it returns `nil`, plus a [String][api.type.String] describing the error. */
/** Sets the buffering mode for an output file (or console).

This function can be used to control buffering of file writes and console output. When buffering is disabled on console output ([print()][api.library.global.print] and calls to [io.write()][api.library.io.write]), the information (debug&nbsp;data) is displayed instantly on the Xcode console and `Console.app` for iPhone/iPad. */
/** Writes the value of each of its arguments to the file. The arguments must be [Strings][api.type.String] or [Numbers][api.type.Number]. To write other values, use `tostring()` or [string.format()][api.library.string.format] before calling `File:write()`. */
}


// ***GameNetwork/***

interface GameNetwork {
/** Valid string outcome values for the [participant][api.type.GameNetwork.participant] of a [match][api.type.GameNetwork.match]. */
outcome?: undefined;
/** Valid string status values for the [participant][api.type.GameNetwork.participant] of a [match][api.type.GameNetwork.match]. */
status?: undefined;
/** A participant object returned from [gameNetwork.request()][plugin.gameNetwork-apple.request]. */
participant?: undefined;
/** A match object returned from [gameNetwork.request()][plugin.gameNetwork-apple.request]. */
match?: undefined;
}


// ***GradientPaint/***

interface GradientPaint extends Paint {
}


// ***GroupObject/***

interface GroupObject extends DisplayObject {
/** By default, display groups do not respect anchor points. However, you can achieve anchor behavior on a display group by setting this property to `true`. */
anchorChildren?: Number;
/** Retrieve the number of children in a group. You access the children by integer (whole number) index. */
numChildren?: Number;
/** Inserts an object into a group. */
/** Remove an object from a group by either an index number or a reference to the object. */
remove(indexOrChild: Number): DisplayObject;
}


// ***ImageSheet/***

interface ImageSheet {
}


// ***ImageSheetPaint/***

interface ImageSheetPaint extends BitmapPaint {
/** Defines the [image sheet][api.type.ImageSheet] frame index used for the [ImageSheetPaint][api.type.ImageSheetPaint]. */
frame?: Number;
}


// ***InputAxis/***

interface InputAxis extends Table {
/** The +/&minus; accuracy of the data provided by the axis input. This value will always be greater than or equal to `0`. For example, if the accuracy is `0.01`, an axis value of `0.5` is accurate between `0.49` and `0.51`. */
accuracy?: Number;
/** Provides a human-readable string (assigned by Corona) which can be used to uniquely identify one axis input belonging to one device. This descriptor string is intended to be used by applications that set up key and axis bindings with a particular device, such as the first joystick connected to the system.

This descriptor string key is generated based on the device's [descriptor][api.type.InputDevice.descriptor] and the axis number. For example, the first 2 axes belonging to one joystick will be named `Joystick 1: Axis 1` and `Joystick 1: Axis 2`. */
descriptor?: String;
/** Indicates the maximum value that an axis input event will provide. This property and the [object.minValue][api.type.InputAxis.minValue] property are needed to make sense of the raw data received by an axis because it will indicate how far that axis has been moved relative to its range. */
maxValue?: Number;
/** Indicates the minimum value that an axis input event will provide. This property and the [object.maxValue][api.type.InputAxis.maxValue] property are needed to make sense of the raw data received by an axis because it will indicate how far that axis has been moved relative to its range. */
minValue?: Number;
/** The number assigned to an input device's axis. This number is based on the number of axes found on one input device. For example, if an input device has 4 axes, then they will be assigned numbers `1`, `2`, `3`, and `4` in the order that they were found. You can use this number to uniquely identify an axis belonging to one input device. This axis number can be used as an index with the array returned by its input device's [getAxes()][api.type.InputDevice.getAxes] function. */
number?: Number;
/** A string describing the type of axis input that an [InputDevice][api.type.InputDevice] has, such as `x` or `y` for a joystick's <nobr>__x__ axis</nobr> or <nobr>__y__ axis</nobr> input. See [Type Names]( */
type?: String;
}


// ***InputDevice/***

interface InputDevice {
/** The unique integer ID assigned to the input device by Android.

Note that the ID assigned to the input device can change after rebooting the Android device. This means that you should never save this ID to file and only use it during the lifetime of the application. If you need an ID that will remain consistent after a reboot, then you should consider using the [permanentId][api.type.InputDevice.permanentId] identifier instead, if available.

Will return `nil` if:

* Reading this property on any platform other than Android.
* The input device is not managed by the Android operating system. */
androidDeviceId?: Number;
/** Determines if the input device supports vibration/rumble feedback. This is a features that usually gamepads support.

Will return `true` if vibration is supported. This means that you can call the input device's [vibrate()][api.type.InputDevice.vibrate] function.

Will return `false` if vibration feedback is not supported by the input device or if it is not supported by the operating system. */
canVibrate?: Boolean;
/** Indicates the input device's current connection state with the system such as "connected", "disconnected", etc.

Possible return values are:

> --------------------- ------------------------------------------------------------------------------------------
> __State__             __Description__
> "connected"           Indicates that the input device is availabe and can provide input events.
> "disconnected"        Indicates that the connection to the input device has been lost. Will no longer provide input events.
> "connecting"          Reserved for future use.
> "disconnecting"       Reserved for future use.
> --------------------- ------------------------------------------------------------------------------------------ */
connectionState?: String;
/** Provides a unique human readable string assigned by Corona used to uniquely identify the device. This descriptor string is intended to be used by applications that set up key bindings with a particular device, such as the first joystick connected to the system.

This descriptor string key is generated based on the device type and the number of devices of that same type. For example, if you have two joysticks and one mouse connected, then Corona will assign descriptor strings "Joystick 1", "Joystick 2", and "Mouse 1" to these devices respectively. */
descriptor?: String;
/** The name that was assigned to the input device by the system or end-user. Can be used to display the name of the device to the end-user, such as on a key/button binding screen.

On Android, this name will be the product name as assigned by the manufacturer unless the end-user changes it via Android's Bluetooth set up screen. */
displayName?: String;
/** A string which specifies the <nobr>platform-dependent</nobr> backend of the device (if&nbsp;any): */
driver?: String;
/** Determines if the input device is currently connected to the system and can provide input events.

Will return `true` if the input device is currently available. The [connectionState][api.type.InputDevice.connectionState] property will be in the "connected" state in this case.

Will return `false` if the input device is unavailable and cannot provide input events. The [connectionState][api.type.InputDevice.connectionState] property will be in the "disconnected", "disconnecting", or "connecting" state in this case. */
isConnected?: Boolean;
/** Provides the input device's unique string ID which will be consistent between reboots. That is, the ID for the input device will not change after rebooting the system. This means that this ID can be saved to file and used to set up key bindings with a very specific input device.

This ID will be unique amongst all physical input devices. This includes devices of the same model and manufacturer. However, note that Corona will sometimes provide multiple [InputDevice][api.type.InputDevice] objects for the same physical input device if it features multiple input types. For example, a game controller has a touchpad and Corona will report it as two [InputDevice][api.type.InputDevice] objects, a joystick and a mouse, both having the same permanent IDs.

Will return `nil` if the device does not have a permanent string ID assigned to it. */
permanentId?: String;
/** undefined */
playerNumber?: Number;
/** This is typically the product name assigned to the device by the manufacturer. Unlike the [displayName][api.type.InputDevice.displayName] property, the product name will not change at runtime. You can use this name to profile game controllers so that you can safely assume what buttons or axes are available on the device and automatically bind them to your game's controls. */
productName?: String;
/** A string that specifies what kind of device is connected to the system. Possible values are:

* `"keyboard"`
* `"mouse"`
* `"stylus"`
* `"trackball"`
* `"touchpad"`
* `"touchscreen"`
* `"joystick"`
* `"gamepad"`
* `"directionalPad"`
* `"steeringWheel"`
* `"flightStick"`
* `"guitar"`
* `"drumSet"`
* `"dancePad"`
* `"unknown"` */
type?: String;
/** undefined */
MFiProfile?: String;
/** undefined */
reportsAbsoluteDpadValues?: Boolean;
/** undefined */
allowsRotation?: Boolean;
/** Fetches information about all axis inputs available on the device. This information can be used to detect the device's capabilities, such as whether or not an analog joystick is available. */
/** Causes the input device to vibrate/rumble.

This is a feature that is typically only supported by gamepads. You can determine if the input device supports vibration feedback by reading its [canVibrate][api.type.InputDevice.canVibrate] property. */
}


// ***Joint/***

interface Joint {
/** undefined */
isActive?: Boolean;
/** undefined */
isCollideConnected?: Boolean;
/** undefined */
reactionTorque?: Number;
/** undefined */
dampingRatio?: Number;
/** undefined */
frequency?: Number;
/** undefined */
length?: Number;
/** undefined */
maxForce?: Number;
/** undefined */
maxTorque?: Number;
/** Applies only to `"gear"` joints. Read-only reference to the first `"pivot"` or `"piston" joint associated with the gear joint. */
joint1?: Userdata;
/** Applies only to `"gear"` joints. Read-only reference to the second `"pivot"` or `"piston"` joint associated with the gear joint. */
joint2?: Userdata;
/** Applies only to `"pulley"` and `"gear"` joints.

For a `"pulley"` joint, indicates the current joint ratio. For this joint type, this property is <nobr>read-only,</nobr> but the ratio value can be initially set as the final parameter in the joint constructor and adjusted to simulate a block and tackle arrangement. In such a scenario, one side of the pulley rope moves faster than the other. The default ratio is `1.0` which simulates a simple pulley.

For a `"gear"` joint, this property can be either set or read, and it indicates the ratio at which the <nobr>motor-driven</nobr> joint drives the corresponding joint in the gear configuration. This ratio can be either positive or negative, depending on the direction required to create an accurate simulation. */
ratio?: Number;
/** Set this to `true` to constrain the limits of rotation for a `"pivot"` joint or the limits of motion for a `"piston"` joint. */
isLimitEnabled?: Boolean;
/** Boolean value which indicates whether a `"pivot"` or `"piston"` joint is <nobr>motor-enabled</nobr> or not. Motor action for a `"pivot"` joint is rotational, while motor action for a `"piston"` joint is linear along the defined axis. */
isMotorEnabled?: Boolean;
/** undefined */
jointSpeed?: Number;
/** undefined */
jointTranslation?: Number;
/** undefined */
maxMotorForce?: Number;
/** Numerical value which specifies the rotational motor speed for a `"pivot"` joint, or the linear motor speed for a `"piston"` joint. */
motorSpeed?: Number;
/** undefined */
motorForce?: Number;
/** undefined */
referenceAngle?: Number;
/** Set this to `true` to constrain the limits of rotation for a `"pivot"` joint or the limits of motion for a `"piston"` joint. */
isLimitEnabled?: Boolean;
/** Boolean value which indicates whether a `"pivot"` or `"piston"` joint is <nobr>motor-enabled</nobr> or not. Motor action for a `"pivot"` joint is rotational, while motor action for a `"piston"` joint is linear along the defined axis. */
isMotorEnabled?: Boolean;
/** undefined */
jointAngle?: Number;
/** undefined */
jointSpeed?: Number;
/** undefined */
maxMotorTorque?: Number;
/** Numerical value which specifies the rotational motor speed for a `"pivot"` joint, or the linear motor speed for a `"piston"` joint. */
motorSpeed?: Number;
/** undefined */
motorTorque?: Number;
/** undefined */
referenceAngle?: Number;
/** Read-only value that, upon instantiation of a `"pulley"` joint, indicates the distance in pixels between the first anchor point and its stationary pulley anchor point. */
length1?: Number;
/** Read-only value that, upon instantiation of a `"pulley"` joint, indicates the distance in pixels between the second anchor point and its stationary pulley anchor point. */
length2?: Number;
/** Applies only to `"pulley"` and `"gear"` joints.

For a `"pulley"` joint, indicates the current joint ratio. For this joint type, this property is <nobr>read-only,</nobr> but the ratio value can be initially set as the final parameter in the joint constructor and adjusted to simulate a block and tackle arrangement. In such a scenario, one side of the pulley rope moves faster than the other. The default ratio is `1.0` which simulates a simple pulley.

For a `"gear"` joint, this property can be either set or read, and it indicates the ratio at which the <nobr>motor-driven</nobr> joint drives the corresponding joint in the gear configuration. This ratio can be either positive or negative, depending on the direction required to create an accurate simulation. */
ratio?: Number;
/** undefined */
dampingRatio?: Number;
/** undefined */
frequency?: Number;
/** undefined */
maxForce?: Number;
/** undefined */
jointSpeed?: Number;
/** undefined */
jointTranslation?: Number;
/** undefined */
springDampingRatio?: Number;
/** Applies only to `"wheel"` joints. This value specifies the <nobr>mass-spring</nobr> damping frequency in Hz. A low value will decrease simulated suspension. */
springFrequency?: Number;
/** undefined */
dampingRatio?: Number;
/** undefined */
frequency?: Number;
/** undefined */
referenceAngle?: Number;
/** undefined */
limitState?: String;
/** undefined */
maxLength?: Number;
/** Returns the __x__ and __y__ coordinates of the joint's anchor point within object `A`, where `A` and `B` are the two joined bodies. Values are in content space. */
/** Returns the __x__ and __y__ coordinates of the joint's anchor point within object `B`, where `A` and `B` are the two joined bodies. Values are in content space. */
/** Returns the __x__ and __y__ coordinates of the joint's anchor point within object `A`, where `A` and `B` are the two joined bodies. Values are relative (local) to object `A`. */
/** Returns the __x__ and __y__ coordinates of the joint's anchor point within object `B`, where `A` and `B` are the two joined bodies. Values are relative (local) to object `B`. */
/** This function returns the reaction force in Newtons at the joint anchor in the second body. */
/** Destroys an existing joint and detaches the two joined bodies. This should not be called during a [collision][api.event.collision] event &mdash; instead, set a flag or add a time delay so the destruction can occur in the next application cycle or later, for example via [timer.performWithDelay()][api.library.timer.performWithDelay].

Alternatively, you can destroy a joint via [display.remove()][api.library.display.remove], passing the joint reference as the sole argument. */
removeSelf(): void;
/** Returns the current target coordinates of a `"touch"` joint as specified by [object:setTarget()][api.type.Joint.setTarget]. */
getTarget(): Number;
/** Sets the current target (follow) point of a `"touch"` joint in content space coordinates. This can be any specific content point, the location of the user's touch, the coordinates of some other object to follow, successive points along a path, etc. */
setTarget(targetX: Number, targetY: Number): void;
/** This function returns the current negative and positive motion limits for a `"piston"` joint. */
/** This function returns the current coordinates of the anchor point along the defined axis, in content space.

For use with `"piston"` and `"wheel"` joints. */
/** This function accepts two values which define the negative and positive range of motion for a `"piston"` joint. The second value should always be greater than or equal to the first value, since they define a range of motion (distance) along the axis. */
/** This function returns the current negative and positive rotation limits of a `"pivot"` joint. */
/** This function accepts two values, in degrees, defining the negative and positive limits of rotation for a `"pivot"` joint. For example, if you want to limit the rotation somewhat tightly in relation to the upward axis (`0`), these values may be `-10` and `10` respectively. Note that these values remain in relation to the rotation of body `A`, meaning that if body `A` rotates after the joint is declared, these rotation limits will remain in rotational synchronization with that body. */
/** Returns the __x__ and __y__ coordinates of a `"pulley"` joint's first ground anchor in content coordinates. */
/** Returns the __x__ and __y__ coordinates of a `"pulley"` joint's second ground anchor in content coordinates. */
/** This function returns the current coordinates of the anchor point along the defined axis, in content space.

For use with `"piston"` and `"wheel"` joints. */
}


// ***LineObject/***

interface LineObject extends ShapeObject {
/** This boolean property controls whether [LineObjects][api.type.LineObject] take [anchorX][api.type.DisplayObject.anchorX] and [anchorY][api.type.DisplayObject.anchorY] into account. This value is `false` by default. */
anchorSegments?: Boolean;
/** Append one or more segments to an existing object created using [display.newLine()][api.library.display.newLine]. */
}


// ***Map/***

interface Map {
/** A read-only Boolean value indicating whether the user's current location is visible within the area currently displayed on the map. This is based on an approximation, so it may be that the value is true when the user's position is slightly offscreen.

This property will always be `false` if the current location is unknown. */
isLocationVisible?: Boolean;
/** A Boolean that determines whether users can scroll the map by hand. Default is `true`. Set to `false` to prevent users from scrolling the map. Note that a map can still be scrolled/panned via the [object:setCenter()][api.type.Map.setCenter] and [object:setRegion()][api.type.Map.setRegion] functions, even if this property is `false`. This is useful if you want map movement to be controlled by the program, not the user. */
isScrollEnabled?: Boolean;
/** A boolean that determines whether users may use pinch/zoom gestures to zoom the map. Default is `true`. Set to `false` to prevent users from zooming the map. Note that a map can still be zoomed via the [object:setRegion()][api.type.Map.setRegion] function, even when this property is set to `false`. */
isZoomEnabled?: Boolean;
/** A string that specifies the type of map display. Possible values are:

* `"standard"` (default)
* `"satellite"`
* `"hybrid"` */
mapType?: String;
/** Adds a pin to the map at the specified location. The optional title and subtitle will appear on a small popup when the pin is touched.  If a custom image is specified then the bottom center of the image will be the pinned location.

This function returns an identification number for the marker added, or `nil` if there was a failure. This number can be used along with [object:removeMarker()][api.type.Map.removeMarker] to remove a marker. */
addMarker(latitude: Number, longitude: Number): Number;
addMarker(latitude: Number, longitude: Number, options: any): Number;
/** Returns a [table][api.type.Table] containing values for the user's current location, including:

* `latitude` &mdash; The latitude in degrees of the current GPS location.

* `longitude` &mdash; The longitude in degrees of the current GPS location.

* `altitude` &mdash; The altitude in meters of the current GPS location.

* `accuracy` &mdash; The accuracy of the GPS location in meters. If negative, the latitude and longitude are not valid.

* `speed` &mdash; The instantaneous speed of the GPS device in meters per second. Divide the results by `0.447` to get MPH (miles&nbsp;per&nbsp;hour).

* `direction` &mdash; The direction the device is traveling in degrees clockwise from true north. If negative, the direction is invalid.

* `time` &mdash; Returns the UTC timestamp of the GPS location event. This is a <nobr>Unix-style</nobr> timestamp, expressed in seconds since <nobr>Jan. 1, 1970</nobr>.

* `errorCode` &mdash; A platform-specific integer for an error condition that is not language dependent. See [Error Handling]( */
getUserLocation(): any;
/** Returns the nearest address based on the given latitude and longitude values, returned as a [mapAddress][api.event.mapAddress] event. */
nearestAddress(latitude: Number, longitude: Number, resultHandler: Listener): void;
/** Clears all markers (pins) from the map. */
removeAllMarkers(): void;
/** Clears a specific marker (pin) from the map. */
removeMarker(markerID: Number): void;
/** This is a replacement for the deprecated [object:getAddressLocation()][api.type.Map.getAddressLocation].

Returns the numerical latitude and longitude values of the given location string. The coordinates are returned as a [mapLocation][api.event.mapLocation] event. The coordinates can then be used to place a marker on the map, <nobr>re-center</nobr> the map to the desired location, or perform any of the other functions that use a latitude and longitude pair.

This function will accept virtually any address or intersection format as input, along with the names of some famous landmarks. */
requestLocation(location: String, resultHandler: Listener): void;
/** Moves the displayed map region to a new location, using the new center point but maintaining the zoom level. The final parameter is an optional boolean (default `false`) that determines whether the transition is animated or happens instantly. */
setCenter(latitude: Number, longitude: Number): void;
setCenter(latitude: Number, longitude: Number, isAnimated: Boolean): void;
/** Moves the displayed map region to a new location, with the new center point and horizontal/vertical span distances given in degrees of latitude and longitude. This implicitly sets the zoom level. This function will "sanity-check" the span settings and will interpolate a consistent zoom level even if `latitudeSpan` and `longitudeSpan` are specified with radically different values. The final parameter is an optional boolean (default `false`) that determines whether the transition is animated or happens instantly.

Note that degrees of latitude and longitude cover large distances on the Earth, so fairly small changes will translate into big position changes in the map, especially at close zoom levels. Also note that most of the planet's map locations are fairly empty, so it will generally be easier to work with known latitude/longitude values when experimenting with maps. Try looking up your own address on a site like [Google Maps](https://www.google.com/maps) if you need a quick test location. */
setRegion(latitude: Number, longitude: Number, latitudeSpan: Number, longitudeSpan: Number): void;
setRegion(latitude: Number, longitude: Number, latitudeSpan: Number, longitudeSpan: Number, isAnimated: Boolean): void;
}


// ***Mask/***

interface Mask {
}


// ***NativeDisplayObject/***

interface NativeDisplayObject extends DisplayObject {
/** This function allows you to __get__ properties of the underlying native object created by the [native][api.library.native] library. For example, if you create a [WebView][api.type.WebView] on iOS, you can access the <nobr>Obj-C</nobr> properties of the corresponding `WKWebView` (or `WKWebViewConfiguration` if called before a request is made). */
getNativeProperty(property: String): void;
/** This function allows you to __set__ properties of the underlying native object created by the [native][api.library.native] library. For example, if you create a [WebView][api.type.WebView] on iOS, you can set the Obj-C properties of the corresponding [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview?language=objc) or [`WKWebViewConfiguration`](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration?language=objc) if called before a request is made. Similarly on Android it can set properties of [`WebView`](https://developer.android.com/reference/android/webkit/WebView) or [`WebSettings`](https://developer.android.com/reference/android/webkit/WebSettings) */
setNativeProperty(property: String, value: undefined): void;
}


// ***Paint/***

interface Paint {
/** The red channel value ranging from `0` to `1`.

Setting this property to a value less than `1` will tint (modulate) the red texture channel. */
r?: Number;
/** The green channel value ranging from `0` to `1`.

Setting this property to a value less than `1` will tint (modulate) the green texture channel. */
g?: Number;
/** The blue channel value ranging from `0` to `1`.

Setting this property to a value less than `1` will tint (modulate) the blue texture channel. */
b?: Number;
/** The alpha channel value ranging from `0` to `1`.

Setting this property to a value less than `1` will tint (modulate) the alpha texture channel. */
a?: Number;
/** The blend equation per the [OpenGL-ES 2 specification](https://www.khronos.org/registry/OpenGL-Refpages/es2.0/xhtml/glBlendEquation.xml). 

Blend equation values can be:

* `"add"` (default)
* `"subtract"`
* `"reverseSubtract"` */
blendEquation?: String;
/** Allows you to change the blend mode on a specific object. */
blendMode?: String;
/** Apply shader effects to an object, including filters, generators (<nobr>procedurally-generated</nobr> textures), and composites (multitexturing).

See the [Filters/Generators/Composites][guide.graphics.effects] guide for a complete list of effects. */
effect?: String;
}


// ***ParticleSystem/***

interface ParticleSystem extends DisplayObject {
/** This numerical property controls the radius of the particle image, in content units. */
imageRadius?: Number;
/** This read-only numerical property represents the number of particles alive. */
particleCount?: Number;
/** This numerical property controls the damping of particles. */
particleDamping?: Number;
/** This numerical property controls the density of particles. This value is `1.0` by default. */
particleDensity?: Number;
/** This boolean property controls the destruction of particles based on their age. This value is `true` by default. */
particleDestructionByAge?: Boolean;
/** This numerical property controls the scaling of gravity. This value is `1.0` by default. */
particleGravityScale?: Number;
/** Read-only numerical property representing the mass of a single particle, in kilograms, within a [ParticleSystem][api.type.ParticleSystem]. */
particleMass?: Number;
/** This numerical property controls the maximum number of particles. This value is `0` by default, indicating no maximum limit. */
particleMaxCount?: Number;
/** This boolean property controls pausing of the simulation of particles. This value is `false` by default, meaning that the simulation should be executed as normal. */
particlePaused?: Boolean;
/** This numerical property controls the radius of particles. This value is `1.0` by default. */
particleRadius?: Number;
/** This boolean property controls the strict particle/body contact check. This value is `false` by default. */
particleStrictContactCheck?: Boolean;
/** A function that accepts __x__ and __y__ components of a linear force in newtons, applied to the center of each particle in a [ParticleSystem][api.type.ParticleSystem]. */
/** Similar to [object:applyForce()][api.type.ParticleSystem.applyForce] except that an impulse is a single momentary jolt in <nobr>newton-seconds.</nobr> */
/** This function is used to create multiple particles simultaneously by filling a region. */
/** This function is used to create a single particle in a [ParticleSystem][api.type.ParticleSystem]. */
/** This function is used to remove all particles within a region. It will return a [number][api.type.Number] indicating how many particles were destroyed. */
/** This function is used to find the particles that intersect with an <nobr>axis-aligned</nobr> <nobr>(non-rotated)</nobr> box. This box is defined by an <nobr>upper-left</nobr> coordinate and a <nobr>lower-right</nobr> coordinate.

This function returns an [array][api.type.Array] of tables describing each hit. The positions returned are in content space. */
/** This function is used to find the particles that collide with a line. It returns an [array][api.type.Array] of tables describing each hit. */
}


// ***Path/***

interface Path {
/** This property represents the type of a [path][api.type.Path] &mdash; see options below. */
type?: String;
/** A read-only table with properties `uMin`, `uMax`, `vMin`, `vMax` that represent the boundaries of the display object's texture being referenced. Some shaders, for instance, might use this to establish a local coordinate system.

The values are normalized from 0 to 1 (versus pixels as in image sheets). A display object that is neither a mesh nor uses an image will have minimum and maximum values of 0 and 1, respectively. */
textureBounds?: any;
/** A read-only array of the form `{u1, v1, u2, v2, ...}` with each `(u, v)` pair containing the texture coordinates at one of the display object's vertices. The values are normalized from 0 to 1 (versus pixels as in image sheets). */
textureVertices?: any;
}


// ***PhysicsContact/***

interface PhysicsContact {
/** undefined */
bounce?: Number;
/** undefined */
friction?: Number;
/** Enable or disable the collision associated with this contact. This is typically used inside a [preCollision][api.event.preCollision] event listener and may be used to construct <nobr>one-sided</nobr> platforms that the character can jump vertically through, but only from below. */
isEnabled?: Boolean;
/** undefined */
isTouching?: Boolean;
}


// ***PickerWheelWidget/***

interface PickerWheelWidget extends GroupObject {
/** Returns a table with the currently selected value/index of each column in the [PickerWheelWidget][api.type.PickerWheelWidget]. */
getValues(): any;
/** Selects a specific row within a specific column of the [PickerWheelWidget][api.type.PickerWheelWidget]. Optionally allows you to snap directly/instantly to the row instead of via default scrolling motion. */
selectValue(targetColumn: Number, targetIndex: Number): void;
selectValue(targetColumn: Number, targetIndex: Number, snapToIndex: Boolean): void;
}


// ***ProgressViewWidget/***

interface ProgressViewWidget extends GroupObject {
/** Sets the current progress of a [ProgressViewWidget][api.type.ProgressViewWidget]. */
setProgress(progress: Number): void;
/** Returns the current progress value of a [ProgressViewWidget][api.type.ProgressViewWidget]. */
getProgress(): Number;
/** Resizes the width of a [ProgressViewWidget][api.type.ProgressViewWidget] after creation. */
resizeView(newWidth: Number): void;
}


// ***Recording/***

interface Recording {
/** Gets the current audio recording sample rate. */
/** Returns `true` if audio recording is currently in progress; `false` if otherwise. */
/** Request an audio recording sample rate.

The recording sample rate defaults to `44100`. Not all platforms may support all rates. Valid rates are `8000`, `11025`, `16000`, `22050`, `44100`. */
/** Start recording audio. */
startRecording(): void;
/** Stops recording audio. */
stopRecording(): void;
}


// ***RectPath/***

interface RectPath extends Path {
}


// ***RoundedRectPath/***

interface RoundedRectPath extends Path {
}


// ***Runtime/***

interface Runtime extends EventDispatcher {
/** Returns a value that identifies the current frame.

This is also available from the `enterFrame` event's `frame` member. */
/** Returns the time since the application started, as of the start of this frame.

This is also available from the `enterFrame` event's `time` member. */
/** Determines if the device is capable of providing events for a given event source such as `"accelerometer"` or `"gyroscope"`.

This function returns `true` if the event source exists, meaning it is okay to call [EventDispatcher:addEventListener()][api.type.EventDispatcher.addEventListener] to handle its events.

It returns `false` if the event source does not exist. For example, if this returns false for `"gyroscope"` then this would indicate that the appropriate hardware was not found on the device. */
/** Disables the runtime error alert that appears if the application hits an error condition. This is shorthand for defining your own [unhandledError][api.event.unhandledError] listener and returning `true`.

Note that syntax errors and out of memory errors will still cause an error alert and that disabling the alert does not mean that the error itself is ignored. Errors will still interrupt the execution of Lua code in listeners and functions. */
}


// ***Scene/***

interface Scene extends EventDispatcher {
}


// ***ScrollViewWidget/***

interface ScrollViewWidget {
/** Returns the __x__ and __y__ coordinates of the [ScrollViewWidget][api.type.ScrollViewWidget] content. */
getContentPosition(): Number;
/** Returns a reference to the [ScrollViewWidget][api.type.ScrollViewWidget] object's view. */
getView(): any;
/** Makes a [ScrollViewWidget][api.type.ScrollViewWidget] scroll to a specific __x__ or __y__ position. */
scrollToPosition(options: undefined): void;
/** Makes a [ScrollViewWidget][api.type.ScrollViewWidget] scroll to a specified position constant. */
scrollTo(position: String, options: any): void;
/** Sets a [ScrollViewWidget][api.type.ScrollViewWidget] to either locked (does&nbsp;not&nbsp;scroll) or unlocked (default&nbsp;behavior). Optionally, you can lock or unlock the scroll view on a specific directional axis. */
setIsLocked(isLocked: Boolean): void;
setIsLocked(isLocked: Boolean, axis: String): void;
/** Updates the scrollable content width of a [ScrollViewWidget][api.type.ScrollViewWidget], meaning the total amount that the user can scroll the view in the horizontal direction. */
setScrollWidth(newWidth: Number): Number;
/** Updates the scrollable content height of a [ScrollViewWidget][api.type.ScrollViewWidget], meaning the total amount that the user can scroll the view in the vertical direction. */
setScrollHeight(newHeight: Number): Number;
/** If you have an object with a touch listener inside a scroll view such as a [ButtonWidget][api.type.ButtonWidget], you should call this method within the `"moved"` phase of that object's touch listener and pass the touch event's `event` table as the sole parameter of this method. This will give focus back to the scroll view, enabling it to continue to scroll. */
takeFocus(event: any): Number;
/** Updates the width and height of a [ScrollViewWidget][api.type.ScrollViewWidget]. Note that if the scrollWidth or scrollHeight were set or changed, they will be overridden and require to be set once more after this function is called. */
setSize(newWidth: Number, newHeight: Number): Number;
}


// ***SegmentedControlWidget/***

interface SegmentedControlWidget extends GroupObject {
/** undefined */
segmentLabel?: String;
/** undefined */
segmentNumber?: Number;
/** Sets the active segment for a [SegmentedControlWidget][api.type.SegmentedControlWidget]. */
setActiveSegment(segmentNumber: Number): void;
}


// ***ShapeObject/***

interface ShapeObject extends DisplayObject {
/** For object fills, Corona uses the concept of [paint][api.type.Paint]. The fill of a shape refers to the interior area of the shape. When you assign a [paint][api.type.Paint] to a fill, you control how the interior area of the shape is rendered. */
fill?: Paint;
/** undefined */
fillVertexCount?: Number;
/** Paths are a property of [shapes][api.type.ShapeObject] that let you control the geometry of the shape.

For the different types of paths, see [Path][api.type.Path]. */
path?: Path;
/** For object strokes, Corona uses the concept of [paint][api.type.Paint]. The stroke of a shape refers to the boundary of the shape. When you assign a [paint][api.type.Paint] to a stroke, you control how the boundary is rendered.

Strokes are painted centrally (equally inside and outside) the object's boundary. */
stroke?: Paint;
/** undefined */
strokeVertexCount?: Number;
/** Sets the stroke width of vector objects, in pixels. Note that stroke widths are broken up to inner and outer parts. The stroke is centered on the boundaries of the object, but when the stroke width is odd, Corona does an integer divide by 2 then a [math.floor()][api.library.math.floor] on the value. For example, `3 / 2 = 1` or `1 / 2 = 0`. The inner width is set to that value, and the remainder is the outer width. This avoids blurring around the edges of the stroke. */
strokeWidth?: Number;
/** Sets the fill color of vector and text objects. Also applies a tint to image objects. */
setFillColor(gray: Number): void;
setFillColor(gray: Number, alpha: Number): void;
setFillColor(red: Number, green: Number, blue: Number): void;
setFillColor(red: Number, green: Number, blue: Number, alpha: Number): void;
setFillColor(gradient: any): void;
/** Sets the color of a particular fill vertex in vector and text objects. Also applies a tint to image objects.

Until a given fill vertex color has been assigned, it is interpreted as white. The color/tint of the object at each vertex is a combination of its fill color and fill vertex color: the two red values multiplied together produce the final red, and so on for the remaining channels. When the object is drawn, the resulting colors/tints are interpolated between neighboring vertices.

The first time this is called on an object, some extra memory will be allocated to it to store the colors. */
setFillVertexColor(index: Number, gray: Number): void;
setFillVertexColor(index: Number, gray: Number, alpha: Number): void;
setFillVertexColor(index: Number, red: Number, green: Number, blue: Number): void;
setFillVertexColor(index: Number, red: Number, green: Number, blue: Number, alpha: Number): void;
/** Sets the stroke (border) color of vector objects. */
setStrokeColor(gray: Number): void;
setStrokeColor(gray: Number, alpha: Number): void;
setStrokeColor(red: Number, green: Number, blue: Number): void;
setStrokeColor(red: Number, green: Number, blue: Number, alpha: Number): void;
/** Sets the color of a particular stroke vertex in vector objects.

Until a given stroke vertex color has been assigned, it is interpreted as white. The color of the object at each vertex is a combination of its stroke color and stroke vertex color: the two red values multiplied together produce the final red, and so on for the remaining channels. When the object is drawn, the resulting colors are interpolated between neighboring vertices.

The first time this is called on an object, some extra memory will be allocated to it to store the colors. */
setStrokeVertexColor(index: Number, gray: Number): void;
setStrokeVertexColor(index: Number, gray: Number, alpha: Number): void;
setStrokeVertexColor(index: Number, red: Number, green: Number, blue: Number): void;
setStrokeVertexColor(index: Number, red: Number, green: Number, blue: Number, alpha: Number): void;
}


// ***SliderWidget/***

interface SliderWidget extends GroupObject {
/** A read-only property that represents the current value of the [SliderWidget][api.type.SliderWidget]. This is a number between `0` and `100`, representing the percentage at which the slider handle is located. */
value?: Number;
/** Changes the [SliderWidget][api.type.SliderWidget] handle position, as well as the [object.value][api.type.SliderWidget.value] property. */
setValue(percent: Number): void;
}


// ***SnapshotObject/***

interface SnapshotObject extends DisplayObject {
/** This group is a special offscreen group that enables you to draw on the snapshot's texture without redrawing the objects in [snapshot.group][api.type.SnapshotObject.group]. */
canvas?: GroupObject;
/** The canvas mode controls what happens to the children of the snapshot's [canvas][api.type.SnapshotObject.canvas]. 

This mode comes into play when the canvas is invalidated (i.e. calling `snapshot:invalidate("canvas")`). On the next render pass, the children will be removed from the canvas. The mode controls where those children go:

* `"append"` &mdash; This is the default. The children will be appended to the snapshot's [group][api.type.SnapshotObject.group] on the next render pass.
* `"discard"` &mdash; The children will be discarded on the next render pass. */
canvasMode?: String;
/** The clear color controls how the snapshot's texture is cleared when the snapshot is invalidated.

By default, the texture is cleared with `0` for all color channels. */
clearColor?: Paint;
/** This group is a special offscreen group that determines what is rendered in the snapshot. */
group?: GroupObject;
/** This controls the texture filter mode for the snapshot. See the __Texture&nbsp;Keys__ section of [display.setDefault()][api.library.display.setDefault] for valid filter values. */
textureFilter?: String;
/** This controls the texture wrap in the __x__ direction for the snapshot. See the __Texture&nbsp;Keys__ section of [display.setDefault()][api.library.display.setDefault] for valid wrap values. */
textureWrapX?: String;
/** This controls the texture wrap in the __y__ direction for the snapshot. See the __Texture&nbsp;Keys__ section of [display.setDefault()][api.library.display.setDefault] for valid wrap values. */
textureWrapY?: String;
/** Invalidating snapshots tells Corona to invalidate its texture cache and re-render the children to a texture on the next render pass.

Unlike most other objects in Corona, snapshots will not automatically recognize when children have been modified. This is because there's a cost to rendering to a texture. */
}


// ***SpinnerWidget/***

interface SpinnerWidget extends GroupObject {
/** This method is used to start the animation or rotation of a [SpinnerWidget][api.type.SpinnerWidget] object. */
start(): void;
/** This method is used to stop the animation or rotation of a [SpinnerWidget][api.type.SpinnerWidget] object. */
stop(): void;
}


// ***SpriteObject/***

interface SpriteObject extends DisplayObject {
/** undefined */
frame?: Number;
/** undefined */
isPlaying?: Boolean;
/** undefined */
numFrames?: Number;
/** A read-only property that returns the name of the currently playing sequence. */
sequence?: String;
/** Gets or sets the scale to be applied to the animation time. This is used to control a sprite's animation speed dynamically.

A time scale of `1.0` (default) runs the animation at normal speed. A time scale of `2.0` runs the animation twice as fast, while a time scale of `0.5` runs the animation at half speed. */
timeScale?: Number;
/** Pauses the current animation, and frame remains on the currently shown frame. Playback can resume later with [object:play()][api.type.SpriteObject.play]. */
pause(): void;
/** Play an animation sequence, starting at the current frame. This does not reset looping.

Note that [object:setSequence()][api.type.SpriteObject.setSequence] must be called before the sequence can be played. Play can also be called after [object:pause()][api.type.SpriteObject.pause]. */
play(): void;
/** Sets the frame in the currently loaded sequence. */
setFrame(frameIndex: Number): void;
/** Loads an animation sequence by name. */
setSequence([ sequenceName ]: String): void;
}


// ***StageObject/***

interface StageObject extends GroupObject {
/** Sets a specific [display object][api.type.DisplayObject] as the target for all future [touch][api.event.touch] events. Pass `nil` to restore default behavior for touch event dispatches.

<div class="guide-notebox">
<div class="notebox-title">Note</div>

The global [StageObject][api.type.StageObject] can be retrieved at any time via [display.getCurrentStage()][api.library.display.getCurrentStage] or [display.currentStage][api.library.display.currentStage].

</div> */
}


// ***StepperWidget/***

interface StepperWidget extends GroupObject {
/** A read-only property that represents the current value of the [StepperWidget][api.type.StepperWidget]. This value is any number from the stepper's [minimum value][api.type.StepperWidget.minimumValue] to the stepper's [maximum value][api.type.StepperWidget.maximumValue]. */
value?: Number;
/** A read-only property that represents the minimum value of the [StepperWidget][api.type.StepperWidget]. */
minimumValue?: Number;
/** A read-only property that represents the maximum value of the [StepperWidget][api.type.StepperWidget]. */
maximumValue?: Number;
/** This method gets the current value of a [StepperWidget][api.type.StepperWidget]. Unlike [object.value][api.type.StepperWidget.value], this is not restricted to usage within the stepper's listener function. */
getValue(): Number;
/** This method sets the current value of a [StepperWidget][api.type.StepperWidget]. Note that the value passed to this function will not adhere to the stepper's minimum or maximum value. For example, if the stepper has a maximum value of `10` and you pass `20` as the `value` parameter, the stepper's value will be `20`. Thus, you should only pass in a `value` integer that is within range of your stepper's minimum and maximum values, if defined. */
setValue(value: Number): void;
}


// ***SwitchWidget/***

interface SwitchWidget extends GroupObject {
/** undefined */
isOn?: Boolean;
/** Used to programatically set the state of a [SwitchWidget][api.type.SwitchWidget]. This also changes the state of the switch visually. */
setState(options: undefined): void;
}


// ***TabBarWidget/***

interface TabBarWidget extends GroupObject {
/** Use this method to set a specific [TabBarWidget][api.type.TabBarWidget] button to its "selected" state. Optionally, you can invoke the `onPress` listener for the button at the same time. */
setSelected(buttonIndex: Number): void;
setSelected(buttonIndex: Number, simulatePress: Boolean): void;
}


// ***TableViewWidget/***

interface TableViewWidget {
/** This method is used for inserting rows into a [TableViewWidget][api.type.TableViewWidget]. */
insertRow(options: undefined): void;
/** This method is used to reload <nobr>(re-render)</nobr> the visible rows of a [TableViewWidget][api.type.TableViewWidget]. */
reloadData(): void;
/** This method is used to delete rows contained inside a [TableViewWidget][api.type.TableViewWidget]. */
deleteRows(rowArray: Array): void;
deleteRows(rowArray: Array, animationOptions: any): void;
/** This method is used to delete __all__ rows contained inside a [TableViewWidget][api.type.TableViewWidget]. */
deleteAllRows(): void;
/** Makes a [TableViewWidget][api.type.TableViewWidget] scroll to a specific __y__ position. Note that the current __y__ position can be retrieved with [object:getContentPosition()][api.type.TableViewWidget.getContentPosition]. */
scrollToY(options: undefined): void;
/** Makes a [TableViewWidget][api.type.TableViewWidget] scroll to a specific row.

<!---

When complete, the top of the row will be at the top position of the table view (plus its `topPadding` value, if any).

--> */
scrollToIndex(rowIndex: Number, time: Number, onComplete: Function): void;
/** Sets a [TableViewWidget][api.type.TableViewWidget] to either locked (does&nbsp;not&nbsp;scroll) or unlocked (default&nbsp;behavior). */
/** Returns the __y__ coordinate of the [TableViewWidget][api.type.TableViewWidget] content. */
getContentPosition(): Number;
/** Returns the number of rows contained in a [TableViewWidget][api.type.TableViewWidget]. */
getNumRows(): Number;
/** Returns the row group reference to a specific __visible__ row in a [TableViewWidget][api.type.TableViewWidget]. */
getRowAtIndex(rowIndex: Number): GroupObject;
}


// ***TextBox/***

interface TextBox extends NativeDisplayObject {
/** Alignment of text displayed in the text box. May be set to one of the following strings: 

* `"left"`
* `"center"`
* `"right"` */
align?: String;
/** Gets or sets the native text box's font. May be set to a font object as returned by the [native.newFont()][api.library.native.newFont] function. */
font?: Userdata;
/** Controls whether the text box has an opaque background or not. Default is `true` (opaque). */
hasBackground?: Boolean;
/** undefined */
isEditable?: Boolean;
/** Determines which font size units the text box's [object.size][api.type.TextBox.size] and [object.font][api.type.TextBox.font] properties are measured in.

If `true`, the font size you read or write to the text box's properties uses Corona's <nobr>content-scaled</nobr> point system. This matches the font size that you provide to the [display.newText()][api.library.display.newText] function.

If `false`, the font size you read or write to the text box's properties uses the platform's native point system. Corona content scaling is not applied to the font size in this case. On iOS, this uses Apple's point system. On Android, this is set in DP units <nobr>(Device-independent Pixels).</nobr> This was Corona's default setting prior to Build */
isFontSizeScaled?: Boolean;
/** Native text boxes can display optional placeholder text (`nil` by default). This can provide a "hint" as to what the user should enter in the box. If set, the placeholder string is displayed using the same style information (except&nbsp;the&nbsp;[text&nbsp;color][api.type.TextBox.setTextColor]). The placeholder does not appear once actual text has been input into the box and it does not currently participate in determining the size of the text box. */
placeholder?: String;
/** Gets or sets the native text box's font size.

Setting this property to `nil` or `0` will make the text box use the system's default font size. */
size?: Number;
/** The contents of the native text input box. */
text?: String;
/** Sets the return key value on the keyboard. */
setReturnKey(key: String): void;
/** Sets the cursor position if the start and end positions are the same. Alternatively, sets a range of selected text if the start and end positions are different. */
setSelection(startPosition: Number, endPosition: Number): void;
/** Sets the color of the text in a native text input box. */
setTextColor(r: Number, g: Number, b: Number): void;
setTextColor(r: Number, g: Number, b: Number, a: Number): void;
}


// ***TextField/***

interface TextField extends NativeDisplayObject {
/** Alignment of text displayed in the input text field. May be set to one of the following strings: 

* `"left"`
* `"center"`
* `"right"` */
align?: String;
/** Gets or sets the native text field's font. May be set to a font object as returned by the [native.newFont()][api.library.native.newFont] function. */
font?: Userdata;
/** Controls whether the text box has an opaque background or not. Default is `true` (opaque). */
hasBackground?: Boolean;
/** Sets the keyboard type for a native text input field. */
inputType?: String;
/** Determines which font size units the text field's [object.size][api.type.TextField.size] and [object.font][api.type.TextField.font] properties are measured in.

If `true`, the font size you read or write to the text field's properties uses Corona's <nobr>content-scaled</nobr> point system. This matches the font size that you provide to the [display.newText()][api.library.display.newText] function.

If `false`, the font size you read or write to the text field's properties uses the platform's native point system. Corona content scaling is not applied to the font size in this case. On iOS, this uses Apple's point system. On Android, this is set in DP units <nobr>(Device-independent Pixels).</nobr> This was Corona's default setting prior to Build */
isFontSizeScaled?: Boolean;
/** Controls whether text in the field is obscured. This is useful for passwords. Default is `false`. */
isSecure?: Boolean;
/** Native text fields can display optional placeholder text (`nil` by default). This can provide a "hint" as to what the user should enter in the field. If set, the placeholder string is displayed using the same style information (except&nbsp;the&nbsp;[text&nbsp;color][api.type.TextField.setTextColor]). The placeholder does not appear once actual text has been input into the field and it does not currently participate in determining the size of the text field. */
placeholder?: String;
/** Gets or sets the native text field's font size.

Setting this property to `nil` or `0` will make the text field use the system's default font size.

It is recommended that you call [object:resizeHeightToFitFont()][api.type.TextField.resizeHeightToFitFont] when changing the font size, because the default font size can vary considerably between devices. The advantage of this approach is that the native text field and its font size will be consistent when compared to other native apps on the same device. */
size?: Number;
/** The contents of the native text input field. */
text?: String;
/** This iOS-only property controls the type of <nobr>auto-correction</nobr> performed. Possible values are:

* `"UITextAutocorrectionTypeDefault"`
* `"UITextAutocorrectionTypeYes"`
* `"UITextAutocorrectionTypeNo"`

Please consult the iOS documentation on [UITextAutocorrectionType](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html */
autocorrectionType?: String;
/** This iOS-only property controls the type of spell checking behavior. Possible values are:

* `"UITextSpellCheckingTypeDefault"`
* `"UITextSpellCheckingTypeYes"`
* `"UITextSpellCheckingTypeNo"`

Please consult the iOS documentation on [UITextSpellCheckingType](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html */
spellCheckingType?: String;
/** Changes the font size to "best fit" the current height of the text field. This will automatically occur when you first create a text field via the [native.newTextField()][api.library.native.newTextField] function. */
resizeFontToFitHeight(): void;
/** Changes the height of the text field to "best&nbsp;fit" the font size that it's currently using. */
resizeHeightToFitFont(): void;
/** Sets the color of the text in a native text input field. */
setTextColor(r: Number, g: Number, b: Number): void;
setTextColor(r: Number, g: Number, b: Number, a: Number): void;
/** Sets the cursor position if the start and end positions are the same. Alternatively, sets a range of selected text if the start and end positions are different. */
setSelection(startPosition: Number, endPosition: Number): void;
/** Sets the return key value on the keyboard. */
setReturnKey(key: String): void;
}


// ***TextObject/***

interface TextObject extends ShapeObject {
/** Retrieves or sets the text size pertaining to a [text object][api.type.TextObject].

Setting this property to `nil` or `0` will make the object use the system's default font size. */
size?: Number;
/** Retrieves or sets the text string of a [text object][api.type.TextObject]. */
text?: String;
/** The amount by which the baseline of the first line is offset from the center of the [text object][api.type.TextObject].

<div class="guide-notebox">
<div class="notebox-title">Note</div>

The baseline is the imaginary horizontal line with which the base of each character in a line of text is aligned.

</div> */
baselineOffset?: Number;
/** Sets the color parameters for an embossed text object created via [display.newEmbossedText()][api.library.display.newEmbossedText]. */
setEmbossColor(colorTable: any): void;
}


// ***TextureResource/***

interface TextureResource extends Table {
/** Use this property instead of the real file name to create display objects, fills, and use in other places where a real image file name is expected. In these instances, you must also pass [texture.baseDir][api.type.TextureResource.baseDir] as a parameter &mdash; see the examples below for reference. */
filename?: String;
/** Use this property instead of the real directory constant to create display objects, fills, and use in other places where a real directory constant is expected. In these instances, you must also pass [texture.filename][api.type.TextureResource.filename] as a parameter &mdash; see the examples below for reference. */
baseDir?: Directory Constant;
/** This property indicates the type of texture. */
type?: String;
/** The [graphics.newTexture()][api.library.graphics.newTexture] API <nobr>pre-loads</nobr> a texture/image and prevents it from being disposed even when there is no display object using it. In order to release the [TextureResource][api.type.TextureResource] object and restore automatic management for the texture, you must release it by calling `texture:releaseSelf()`.

Alternatively, in a wider scope, [graphics.releaseTextures()][api.library.graphics.releaseTextures] can be used to release all texture objects sharing the same [type][api.type.TextureResource.type] parameter. */
}


// ***TextureResourceBitmap/***

interface TextureResourceBitmap extends TextureResource {
/** Indicates the horizontal wrap mode for a texture: `"clampToEdge"`, `"repeat"` or `"mirroredRepeat"`. */
wrapX?: String;
/** Indicates the vertical wrap mode for a texture: `"clampToEdge"`, `"repeat"` or `"mirroredRepeat"`. */
wrapY?: String;
/** When an image texture is created, the bitmap is read from the file system and loaded into memory. At the first point a display object is created which utilizes the texture, it is scheduled to load to the GPU.

Use this method to schedule loading of the texture to the GPU before the start of the next time step. This may reduce the time required to render the display object which utilizes the texture. */
}


// ***TextureResourceCanvas/***

interface TextureResourceCanvas extends TextureResource {
/** This read-only property indicates the width in which objects can be rendered within a [TextureResourceCanvas][api.type.TextureResourceCanvas]. Essentially, if a display object drawn to the canvas is equal to this width, it will occupy the entire horizontal space.

Unlike [pixelWidth][api.type.TextureResourceCanvas.pixelWidth], this property is not <nobr>read-only</nobr>. The visual effect of changing it will be horizontal stretching or shrinking of rendered [TextureResourceCanvas][api.type.TextureResourceCanvas] content. To see the changes, call [texture:invalidate()][api.type.TextureResourceCanvas.invalidate]. */
width?: Number;
/** This property indicates the height in which objects can be rendered within a [TextureResourceCanvas][api.type.TextureResourceCanvas]. Essentially, if a display object drawn to the canvas is equal to this height, it will occupy the entire vertical space.

Unlike [pixelHeight][api.type.TextureResourceCanvas.pixelHeight], this property is not <nobr>read-only</nobr>. The visual effect of changing it will be vertical stretching or shrinking of rendered [TextureResourceCanvas][api.type.TextureResourceCanvas] content. To see the changes, call [texture:invalidate()][api.type.TextureResourceCanvas.invalidate]. */
height?: Number;
/** undefined */
pixelWidth?: Number;
/** undefined */
pixelHeight?: Number;
/** undefined */
anchorX?: Number;
/** undefined */
anchorY?: Number;
/** After being rendered to the [TextureResourceCanvas][api.type.TextureResourceCanvas], the associated [display object][api.type.DisplayObject] is moved to this group.

All objects within this group are rendered when the canvas is invalidated with `"cache"`:

``````lua
texture:invalidate( "cache" )
``````

Elements in this [GroupObject][api.type.GroupObject] can be accessed just like elements in any other display group. You can manually add or remove child objects and use [texture:invalidate()][api.type.TextureResourceCanvas.invalidate] to render changes to the texture. */
cache?: GroupObject;
/** This method adds/renders a [display object][api.type.DisplayObject] to the internal rendering queue of the [TextureResourceCanvas][api.type.TextureResourceCanvas] object. All rendering of queued objects occurs after calling [texture:invalidate()][api.type.TextureResourceCanvas.invalidate]. */
/** This method schedules display objects queued for rendering via [texture:draw()][api.type.TextureResourceCanvas.draw] to be rendered to the texture before the next frame. */
/** Sets the fill color of the texture, also known as the "clear&nbsp;color" or the background. The entire texture will be set to the specified color during the next scheduled <nobr>non-accumulative</nobr> rendering. Default is transparent. */
}


// ***TextureResourceExternal/***

interface TextureResourceExternal extends TextureResource {
/** undefined */
width?: Number;
/** undefined */
height?: Number;
/** Calling this function will update the texture from the source provided by a plugin. */
}


// ***Video/***

interface Video extends NativeDisplayObject {
/** undefined */
currentTime?: Number;
/** undefined */
isMuted?: Boolean;
/** The read-only length of the currently loaded video, in seconds. */
totalTime?: Number;
/** Loads a specified video. Use this in conjunction with [native.newVideo()][api.library.native.newVideo]. */
load(path: String): void;
load(path: String, baseSource: Constant): void;
/** Pauses the currently loaded video. Use this in conjunction with [native.newVideo()][api.library.native.newVideo]. */
pause(): void;
/** Plays the currently loaded video. Use this in conjunction with [native.newVideo()][api.library.native.newVideo]. */
play(): void;
/** Seeks and jumps to the specified time in the currently loaded video. Use this in conjunction with [native.newVideo()][api.library.native.newVideo]. */
seek(timeInSeconds: Number): void;
}


// ***WebView/***

interface WebView extends NativeDisplayObject {
/** undefined */
canGoBack?: Boolean;
/** undefined */
canGoForward?: Boolean;
/** This is a get/set property that corresponds to whether or not the background of the [WebView][api.type.WebView] is visible or transparent. Default is `true`. */
hasBackground?: Boolean;
/** Takes the webView back one step in the [WebView][api.type.WebView] history. */
back(): void;
/** Deletes cookies for the [WebView][api.type.WebView]. */
deleteCookies(): void;
/** Takes the [WebView][api.type.WebView] forward one step in its history. */
forward(): void;
/** Reloads the currently loaded page in a [WebView][api.type.WebView]. */
reload(): void;
/** Loads the specified URL (string) into the [WebView][api.type.WebView]. For local content, you must specify a base [system][api.library.system] directory as a search path. */
request(url: String): void;
request(url: String, baseDir: Constant): void;
/** Stops loading the current page in the [WebView][api.type.WebView] (if loading). */
stop(): void;
}