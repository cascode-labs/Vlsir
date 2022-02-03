// source: tetris.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.tetris.Cell');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.circuit.Interface');
goog.require('proto.vlsir.circuit.Module');
goog.require('proto.vlsir.tetris.Abstract');
goog.require('proto.vlsir.tetris.Layout');

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
proto.vlsir.tetris.Cell = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vlsir.tetris.Cell, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.tetris.Cell.displayName = 'proto.vlsir.tetris.Cell';
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
proto.vlsir.tetris.Cell.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.tetris.Cell.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.tetris.Cell} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Cell.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_interface: (f = msg.getInterface()) && proto.vlsir.circuit.Interface.toObject(includeInstance, f),
    module: (f = msg.getModule()) && proto.vlsir.circuit.Module.toObject(includeInstance, f),
    pb_abstract: (f = msg.getAbstract()) && proto.vlsir.tetris.Abstract.toObject(includeInstance, f),
    layout: (f = msg.getLayout()) && proto.vlsir.tetris.Layout.toObject(includeInstance, f)
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
 * @return {!proto.vlsir.tetris.Cell}
 */
proto.vlsir.tetris.Cell.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.tetris.Cell;
  return proto.vlsir.tetris.Cell.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.tetris.Cell} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.tetris.Cell}
 */
proto.vlsir.tetris.Cell.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = new proto.vlsir.circuit.Interface;
      reader.readMessage(value,proto.vlsir.circuit.Interface.deserializeBinaryFromReader);
      msg.setInterface(value);
      break;
    case 11:
      var value = new proto.vlsir.circuit.Module;
      reader.readMessage(value,proto.vlsir.circuit.Module.deserializeBinaryFromReader);
      msg.setModule(value);
      break;
    case 12:
      var value = new proto.vlsir.tetris.Abstract;
      reader.readMessage(value,proto.vlsir.tetris.Abstract.deserializeBinaryFromReader);
      msg.setAbstract(value);
      break;
    case 13:
      var value = new proto.vlsir.tetris.Layout;
      reader.readMessage(value,proto.vlsir.tetris.Layout.deserializeBinaryFromReader);
      msg.setLayout(value);
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
proto.vlsir.tetris.Cell.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.tetris.Cell.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.tetris.Cell} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Cell.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterface();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.vlsir.circuit.Interface.serializeBinaryToWriter
    );
  }
  f = message.getModule();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.vlsir.circuit.Module.serializeBinaryToWriter
    );
  }
  f = message.getAbstract();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.vlsir.tetris.Abstract.serializeBinaryToWriter
    );
  }
  f = message.getLayout();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.vlsir.tetris.Layout.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vlsir.tetris.Cell.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.tetris.Cell} returns this
 */
proto.vlsir.tetris.Cell.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional vlsir.circuit.Interface interface = 10;
 * @return {?proto.vlsir.circuit.Interface}
 */
proto.vlsir.tetris.Cell.prototype.getInterface = function() {
  return /** @type{?proto.vlsir.circuit.Interface} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.circuit.Interface, 10));
};


/**
 * @param {?proto.vlsir.circuit.Interface|undefined} value
 * @return {!proto.vlsir.tetris.Cell} returns this
*/
proto.vlsir.tetris.Cell.prototype.setInterface = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Cell} returns this
 */
proto.vlsir.tetris.Cell.prototype.clearInterface = function() {
  return this.setInterface(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Cell.prototype.hasInterface = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional vlsir.circuit.Module module = 11;
 * @return {?proto.vlsir.circuit.Module}
 */
proto.vlsir.tetris.Cell.prototype.getModule = function() {
  return /** @type{?proto.vlsir.circuit.Module} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.circuit.Module, 11));
};


/**
 * @param {?proto.vlsir.circuit.Module|undefined} value
 * @return {!proto.vlsir.tetris.Cell} returns this
*/
proto.vlsir.tetris.Cell.prototype.setModule = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Cell} returns this
 */
proto.vlsir.tetris.Cell.prototype.clearModule = function() {
  return this.setModule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Cell.prototype.hasModule = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Abstract abstract = 12;
 * @return {?proto.vlsir.tetris.Abstract}
 */
proto.vlsir.tetris.Cell.prototype.getAbstract = function() {
  return /** @type{?proto.vlsir.tetris.Abstract} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.tetris.Abstract, 12));
};


/**
 * @param {?proto.vlsir.tetris.Abstract|undefined} value
 * @return {!proto.vlsir.tetris.Cell} returns this
*/
proto.vlsir.tetris.Cell.prototype.setAbstract = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Cell} returns this
 */
proto.vlsir.tetris.Cell.prototype.clearAbstract = function() {
  return this.setAbstract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Cell.prototype.hasAbstract = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Layout layout = 13;
 * @return {?proto.vlsir.tetris.Layout}
 */
proto.vlsir.tetris.Cell.prototype.getLayout = function() {
  return /** @type{?proto.vlsir.tetris.Layout} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.tetris.Layout, 13));
};


/**
 * @param {?proto.vlsir.tetris.Layout|undefined} value
 * @return {!proto.vlsir.tetris.Cell} returns this
*/
proto.vlsir.tetris.Cell.prototype.setLayout = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Cell} returns this
 */
proto.vlsir.tetris.Cell.prototype.clearLayout = function() {
  return this.setLayout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Cell.prototype.hasLayout = function() {
  return jspb.Message.getField(this, 13) != null;
};


