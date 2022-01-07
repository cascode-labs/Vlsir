// source: tetris.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.vlsir.tetris.Instance');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.tetris.Place');
goog.require('proto.vlsir.utils.Reference');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.tetris.Instance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vlsir.tetris.Instance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.tetris.Instance.displayName = 'proto.vlsir.tetris.Instance';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.tetris.Instance.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.tetris.Instance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.tetris.Instance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Instance.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cell: (f = msg.getCell()) && proto.vlsir.utils.Reference.toObject(includeInstance, f),
    loc: (f = msg.getLoc()) && proto.vlsir.tetris.Place.toObject(includeInstance, f),
    reflectHoriz: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    reflectVert: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.tetris.Instance}
 */
proto.vlsir.tetris.Instance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.tetris.Instance;
  return proto.vlsir.tetris.Instance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.tetris.Instance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.tetris.Instance}
 */
proto.vlsir.tetris.Instance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.vlsir.utils.Reference;
      reader.readMessage(value,proto.vlsir.utils.Reference.deserializeBinaryFromReader);
      msg.setCell(value);
      break;
    case 4:
      var value = new proto.vlsir.tetris.Place;
      reader.readMessage(value,proto.vlsir.tetris.Place.deserializeBinaryFromReader);
      msg.setLoc(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReflectHoriz(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReflectVert(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.tetris.Instance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.tetris.Instance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.tetris.Instance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Instance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCell();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vlsir.utils.Reference.serializeBinaryToWriter
    );
  }
  f = message.getLoc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vlsir.tetris.Place.serializeBinaryToWriter
    );
  }
  f = message.getReflectHoriz();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getReflectVert();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vlsir.tetris.Instance.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.tetris.Instance} returns this
 */
proto.vlsir.tetris.Instance.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional vlsir.utils.Reference cell = 3;
 * @return {?proto.vlsir.utils.Reference}
 */
proto.vlsir.tetris.Instance.prototype.getCell = function() {
  return /** @type{?proto.vlsir.utils.Reference} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.utils.Reference, 3));
};


/**
 * @param {?proto.vlsir.utils.Reference|undefined} value
 * @return {!proto.vlsir.tetris.Instance} returns this
*/
proto.vlsir.tetris.Instance.prototype.setCell = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Instance} returns this
 */
proto.vlsir.tetris.Instance.prototype.clearCell = function() {
  return this.setCell(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Instance.prototype.hasCell = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Place loc = 4;
 * @return {?proto.vlsir.tetris.Place}
 */
proto.vlsir.tetris.Instance.prototype.getLoc = function() {
  return /** @type{?proto.vlsir.tetris.Place} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.tetris.Place, 4));
};


/**
 * @param {?proto.vlsir.tetris.Place|undefined} value
 * @return {!proto.vlsir.tetris.Instance} returns this
*/
proto.vlsir.tetris.Instance.prototype.setLoc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Instance} returns this
 */
proto.vlsir.tetris.Instance.prototype.clearLoc = function() {
  return this.setLoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Instance.prototype.hasLoc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool reflect_horiz = 6;
 * @return {boolean}
 */
proto.vlsir.tetris.Instance.prototype.getReflectHoriz = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vlsir.tetris.Instance} returns this
 */
proto.vlsir.tetris.Instance.prototype.setReflectHoriz = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool reflect_vert = 7;
 * @return {boolean}
 */
proto.vlsir.tetris.Instance.prototype.getReflectVert = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vlsir.tetris.Instance} returns this
 */
proto.vlsir.tetris.Instance.prototype.setReflectVert = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


