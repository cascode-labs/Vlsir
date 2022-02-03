// source: raw.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.raw.Polygon');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.raw.Point');

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
proto.vlsir.raw.Polygon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.raw.Polygon.repeatedFields_, null);
};
goog.inherits(proto.vlsir.raw.Polygon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.raw.Polygon.displayName = 'proto.vlsir.raw.Polygon';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.raw.Polygon.repeatedFields_ = [2];



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
proto.vlsir.raw.Polygon.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.raw.Polygon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.raw.Polygon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.Polygon.toObject = function(includeInstance, msg) {
  var f, obj = {
    net: jspb.Message.getFieldWithDefault(msg, 1, ""),
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    proto.vlsir.raw.Point.toObject, includeInstance)
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
 * @return {!proto.vlsir.raw.Polygon}
 */
proto.vlsir.raw.Polygon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.raw.Polygon;
  return proto.vlsir.raw.Polygon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.raw.Polygon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.raw.Polygon}
 */
proto.vlsir.raw.Polygon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNet(value);
      break;
    case 2:
      var value = new proto.vlsir.raw.Point;
      reader.readMessage(value,proto.vlsir.raw.Point.deserializeBinaryFromReader);
      msg.addVertices(value);
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
proto.vlsir.raw.Polygon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.raw.Polygon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.raw.Polygon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.raw.Polygon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNet();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vlsir.raw.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional string net = 1;
 * @return {string}
 */
proto.vlsir.raw.Polygon.prototype.getNet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.raw.Polygon} returns this
 */
proto.vlsir.raw.Polygon.prototype.setNet = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Point vertices = 2;
 * @return {!Array<!proto.vlsir.raw.Point>}
 */
proto.vlsir.raw.Polygon.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.vlsir.raw.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.raw.Point, 2));
};


/**
 * @param {!Array<!proto.vlsir.raw.Point>} value
 * @return {!proto.vlsir.raw.Polygon} returns this
*/
proto.vlsir.raw.Polygon.prototype.setVerticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vlsir.raw.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.raw.Point}
 */
proto.vlsir.raw.Polygon.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vlsir.raw.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.raw.Polygon} returns this
 */
proto.vlsir.raw.Polygon.prototype.clearVerticesList = function() {
  return this.setVerticesList([]);
};


