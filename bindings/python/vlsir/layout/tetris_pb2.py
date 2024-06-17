# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: layout/tetris.proto
"""Generated protocol buffer code."""

from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database

# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import utils_pb2 as utils__pb2
from layout import raw_pb2 as layout_dot_raw__pb2
import circuit_pb2 as circuit__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(
    b'\n\x13layout/tetris.proto\x12\x0cvlsir.tetris\x1a\x0butils.proto\x1a\x10layout/raw.proto\x1a\rcircuit.proto"i\n\x07Library\x12\x0e\n\x06\x64omain\x18\x01 \x01(\t\x12!\n\x05\x63\x65lls\x18\n \x03(\x0b\x32\x12.vlsir.tetris.Cell\x12+\n\x06\x61uthor\x18\x14 \x01(\x0b\x32\x1b.vlsir.utils.AuthorMetadata"\xb8\x01\n\x04\x43\x65ll\x12\x0c\n\x04name\x18\x01 \x01(\t\x12+\n\tinterface\x18\n \x01(\x0b\x32\x18.vlsir.circuit.Interface\x12%\n\x06module\x18\x0b \x01(\x0b\x32\x15.vlsir.circuit.Module\x12(\n\x08\x61\x62stract\x18\x0c \x01(\x0b\x32\x16.vlsir.tetris.Abstract\x12$\n\x06layout\x18\r \x01(\x0b\x32\x14.vlsir.tetris.Layout"\xbc\x01\n\x06Layout\x12\x0c\n\x04name\x18\x01 \x01(\t\x12&\n\x07outline\x18\n \x01(\x0b\x32\x15.vlsir.tetris.Outline\x12)\n\tinstances\x18\x14 \x03(\x0b\x32\x16.vlsir.tetris.Instance\x12)\n\x0b\x61ssignments\x18\x15 \x03(\x0b\x32\x14.vlsir.tetris.Assign\x12&\n\x04\x63uts\x18\x16 \x03(\x0b\x32\x18.vlsir.tetris.TrackCross";\n\x06\x41ssign\x12\x0b\n\x03net\x18\x01 \x01(\t\x12$\n\x02\x61t\x18\x02 \x01(\x0b\x32\x18.vlsir.tetris.TrackCross"Z\n\nTrackCross\x12%\n\x05track\x18\x01 \x01(\x0b\x32\x16.vlsir.tetris.TrackRef\x12%\n\x05\x63ross\x18\x02 \x01(\x0b\x32\x16.vlsir.tetris.TrackRef"(\n\x08TrackRef\x12\r\n\x05layer\x18\x01 \x01(\x03\x12\r\n\x05track\x18\x02 \x01(\x03"/\n\x07Outline\x12\t\n\x01x\x18\x01 \x03(\x03\x12\t\n\x01y\x18\x02 \x03(\x03\x12\x0e\n\x06metals\x18\x03 \x01(\x03"k\n\x08\x41\x62stract\x12\x0c\n\x04name\x18\x01 \x01(\t\x12&\n\x07outline\x18\n \x01(\x0b\x32\x15.vlsir.tetris.Outline\x12)\n\x05ports\x18\x14 \x03(\x0b\x32\x1a.vlsir.tetris.AbstractPort"\x97\x04\n\x0c\x41\x62stractPort\x12\x0b\n\x03net\x18\x01 \x01(\t\x12\x33\n\x04\x65\x64ge\x18\n \x01(\x0b\x32#.vlsir.tetris.AbstractPort.EdgePortH\x00\x12<\n\tztop_edge\x18\x0b \x01(\x0b\x32\'.vlsir.tetris.AbstractPort.ZTopEdgePortH\x00\x12:\n\nztop_inner\x18\x0c \x01(\x0b\x32$.vlsir.tetris.AbstractPort.ZTopInnerH\x00\x1a\x64\n\x08\x45\x64gePort\x12%\n\x05track\x18\x01 \x01(\x0b\x32\x16.vlsir.tetris.TrackRef\x12\x31\n\x04side\x18\x02 \x01(\x0e\x32#.vlsir.tetris.AbstractPort.PortSide\x1av\n\x0cZTopEdgePort\x12\r\n\x05track\x18\x01 \x01(\x03\x12\x31\n\x04side\x18\x02 \x01(\x0e\x32#.vlsir.tetris.AbstractPort.PortSide\x12$\n\x04into\x18\x03 \x01(\x0b\x32\x16.vlsir.tetris.TrackRef\x1a\x33\n\tZTopInner\x12&\n\x04locs\x18\x01 \x03(\x0b\x32\x18.vlsir.tetris.TrackCross"0\n\x08PortSide\x12\x12\n\x0e\x42OTTOM_OR_LEFT\x10\x00\x12\x10\n\x0cTOP_OR_RIGHT\x10\x01\x42\x06\n\x04kind"\x8d\x01\n\x08Instance\x12\x0c\n\x04name\x18\x01 \x01(\t\x12$\n\x04\x63\x65ll\x18\x03 \x01(\x0b\x32\x16.vlsir.utils.Reference\x12 \n\x03loc\x18\x04 \x01(\x0b\x32\x13.vlsir.tetris.Place\x12\x15\n\rreflect_horiz\x18\x06 \x01(\x08\x12\x14\n\x0creflect_vert\x18\x07 \x01(\x08"X\n\x05Place\x12\x1f\n\x03\x61\x62s\x18\x01 \x01(\x0b\x32\x10.vlsir.raw.PointH\x00\x12%\n\x03rel\x18\x02 \x01(\x0b\x32\x16.vlsir.tetris.RelPlaceH\x00\x42\x07\n\x05place"\n\n\x08RelPlace"\xce\x01\n\x05Stack\x12\x1f\n\x05units\x18\x01 \x01(\x0e\x32\x10.vlsir.raw.Units\x12*\n\x04prim\x18\x02 \x01(\x0b\x32\x1c.vlsir.tetris.PrimitiveLayer\x12(\n\x06metals\x18\x03 \x03(\x0b\x32\x18.vlsir.tetris.MetalLayer\x12$\n\x04vias\x18\x04 \x03(\x0b\x32\x16.vlsir.tetris.ViaLayer\x12(\n\x0e\x62oundary_layer\x18\x0b \x01(\x0b\x32\x10.vlsir.raw.Layer"{\n\tLayerEnum\x12/\n\x04type\x18\x01 \x01(\x0e\x32!.vlsir.tetris.LayerEnum.LayerType\x12\r\n\x05index\x18\x02 \x01(\x03".\n\tLayerType\x12\r\n\tPRIMITIVE\x10\x00\x12\t\n\x05METAL\x10\x01\x12\x07\n\x03VIA\x10\x02"\xd1\x02\n\nMetalLayer\x12\x0c\n\x04name\x18\x01 \x01(\t\x12)\n\x03\x64ir\x18\x02 \x01(\x0e\x32\x1c.vlsir.tetris.MetalLayer.Dir\x12\x0f\n\x07\x63utsize\x18\x03 \x01(\x03\x12(\n\x07\x65ntries\x18\x04 \x03(\x0b\x32\x17.vlsir.tetris.TrackSpec\x12\x0e\n\x06offset\x18\x05 \x01(\x03\x12\x0f\n\x07overlap\x18\x06 \x01(\x03\x12\x0c\n\x04\x66lip\x18\x07 \x01(\x08\x12\x34\n\x04prim\x18\x08 \x01(\x0e\x32&.vlsir.tetris.MetalLayer.PrimitiveMode\x12\x1d\n\x03raw\x18\x0b \x01(\x0b\x32\x10.vlsir.raw.Layer"\x1a\n\x03\x44ir\x12\t\n\x05HORIZ\x10\x00\x12\x08\n\x04VERT\x10\x01"/\n\rPrimitiveMode\x12\x08\n\x04PRIM\x10\x00\x12\t\n\x05SPLIT\x10\x01\x12\t\n\x05STACK\x10\x02"\xa3\x01\n\x08ViaLayer\x12\x0c\n\x04name\x18\x01 \x01(\t\x12$\n\x03top\x18\x02 \x01(\x0b\x32\x17.vlsir.tetris.LayerEnum\x12$\n\x03\x62ot\x18\x03 \x01(\x0b\x32\x17.vlsir.tetris.LayerEnum\x12\x1e\n\x04size\x18\x04 \x01(\x0b\x32\x10.vlsir.tetris.Xy\x12\x1d\n\x03raw\x18\x0b \x01(\x0b\x32\x10.vlsir.raw.Layer"3\n\x0ePrimitiveLayer\x12!\n\x07pitches\x18\x01 \x01(\x0b\x32\x10.vlsir.tetris.Xy"\xce\x02\n\tTrackSpec\x12\x33\n\x05\x65ntry\x18\x01 \x01(\x0b\x32".vlsir.tetris.TrackSpec.TrackEntryH\x00\x12\x30\n\x06repeat\x18\x02 \x01(\x0b\x32\x1e.vlsir.tetris.TrackSpec.RepeatH\x00\x1a\x84\x01\n\nTrackEntry\x12;\n\x05ttype\x18\x01 \x01(\x0e\x32,.vlsir.tetris.TrackSpec.TrackEntry.TrackType\x12\r\n\x05width\x18\x02 \x01(\x03"*\n\tTrackType\x12\x07\n\x03GAP\x10\x00\x12\n\n\x06SIGNAL\x10\x01\x12\x08\n\x04RAIL\x10\x02\x1aK\n\x06Repeat\x12\x33\n\x07\x65ntries\x18\x01 \x03(\x0b\x32".vlsir.tetris.TrackSpec.TrackEntry\x12\x0c\n\x04nrep\x18\x02 \x01(\x03\x42\x06\n\x04spec"\x1a\n\x02Xy\x12\t\n\x01x\x18\x01 \x01(\x03\x12\t\n\x01y\x18\x02 \x01(\x03\x62\x06proto3'
)


_LIBRARY = DESCRIPTOR.message_types_by_name["Library"]
_CELL = DESCRIPTOR.message_types_by_name["Cell"]
_LAYOUT = DESCRIPTOR.message_types_by_name["Layout"]
_ASSIGN = DESCRIPTOR.message_types_by_name["Assign"]
_TRACKCROSS = DESCRIPTOR.message_types_by_name["TrackCross"]
_TRACKREF = DESCRIPTOR.message_types_by_name["TrackRef"]
_OUTLINE = DESCRIPTOR.message_types_by_name["Outline"]
_ABSTRACT = DESCRIPTOR.message_types_by_name["Abstract"]
_ABSTRACTPORT = DESCRIPTOR.message_types_by_name["AbstractPort"]
_ABSTRACTPORT_EDGEPORT = _ABSTRACTPORT.nested_types_by_name["EdgePort"]
_ABSTRACTPORT_ZTOPEDGEPORT = _ABSTRACTPORT.nested_types_by_name["ZTopEdgePort"]
_ABSTRACTPORT_ZTOPINNER = _ABSTRACTPORT.nested_types_by_name["ZTopInner"]
_INSTANCE = DESCRIPTOR.message_types_by_name["Instance"]
_PLACE = DESCRIPTOR.message_types_by_name["Place"]
_RELPLACE = DESCRIPTOR.message_types_by_name["RelPlace"]
_STACK = DESCRIPTOR.message_types_by_name["Stack"]
_LAYERENUM = DESCRIPTOR.message_types_by_name["LayerEnum"]
_METALLAYER = DESCRIPTOR.message_types_by_name["MetalLayer"]
_VIALAYER = DESCRIPTOR.message_types_by_name["ViaLayer"]
_PRIMITIVELAYER = DESCRIPTOR.message_types_by_name["PrimitiveLayer"]
_TRACKSPEC = DESCRIPTOR.message_types_by_name["TrackSpec"]
_TRACKSPEC_TRACKENTRY = _TRACKSPEC.nested_types_by_name["TrackEntry"]
_TRACKSPEC_REPEAT = _TRACKSPEC.nested_types_by_name["Repeat"]
_XY = DESCRIPTOR.message_types_by_name["Xy"]
_ABSTRACTPORT_PORTSIDE = _ABSTRACTPORT.enum_types_by_name["PortSide"]
_LAYERENUM_LAYERTYPE = _LAYERENUM.enum_types_by_name["LayerType"]
_METALLAYER_DIR = _METALLAYER.enum_types_by_name["Dir"]
_METALLAYER_PRIMITIVEMODE = _METALLAYER.enum_types_by_name["PrimitiveMode"]
_TRACKSPEC_TRACKENTRY_TRACKTYPE = _TRACKSPEC_TRACKENTRY.enum_types_by_name["TrackType"]
Library = _reflection.GeneratedProtocolMessageType(
    "Library",
    (_message.Message,),
    {
        "DESCRIPTOR": _LIBRARY,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Library)
    },
)
_sym_db.RegisterMessage(Library)

Cell = _reflection.GeneratedProtocolMessageType(
    "Cell",
    (_message.Message,),
    {
        "DESCRIPTOR": _CELL,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Cell)
    },
)
_sym_db.RegisterMessage(Cell)

Layout = _reflection.GeneratedProtocolMessageType(
    "Layout",
    (_message.Message,),
    {
        "DESCRIPTOR": _LAYOUT,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Layout)
    },
)
_sym_db.RegisterMessage(Layout)

Assign = _reflection.GeneratedProtocolMessageType(
    "Assign",
    (_message.Message,),
    {
        "DESCRIPTOR": _ASSIGN,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Assign)
    },
)
_sym_db.RegisterMessage(Assign)

TrackCross = _reflection.GeneratedProtocolMessageType(
    "TrackCross",
    (_message.Message,),
    {
        "DESCRIPTOR": _TRACKCROSS,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.TrackCross)
    },
)
_sym_db.RegisterMessage(TrackCross)

TrackRef = _reflection.GeneratedProtocolMessageType(
    "TrackRef",
    (_message.Message,),
    {
        "DESCRIPTOR": _TRACKREF,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.TrackRef)
    },
)
_sym_db.RegisterMessage(TrackRef)

Outline = _reflection.GeneratedProtocolMessageType(
    "Outline",
    (_message.Message,),
    {
        "DESCRIPTOR": _OUTLINE,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Outline)
    },
)
_sym_db.RegisterMessage(Outline)

Abstract = _reflection.GeneratedProtocolMessageType(
    "Abstract",
    (_message.Message,),
    {
        "DESCRIPTOR": _ABSTRACT,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Abstract)
    },
)
_sym_db.RegisterMessage(Abstract)

AbstractPort = _reflection.GeneratedProtocolMessageType(
    "AbstractPort",
    (_message.Message,),
    {
        "EdgePort": _reflection.GeneratedProtocolMessageType(
            "EdgePort",
            (_message.Message,),
            {
                "DESCRIPTOR": _ABSTRACTPORT_EDGEPORT,
                "__module__": "layout.tetris_pb2",
                # @@protoc_insertion_point(class_scope:vlsir.tetris.AbstractPort.EdgePort)
            },
        ),
        "ZTopEdgePort": _reflection.GeneratedProtocolMessageType(
            "ZTopEdgePort",
            (_message.Message,),
            {
                "DESCRIPTOR": _ABSTRACTPORT_ZTOPEDGEPORT,
                "__module__": "layout.tetris_pb2",
                # @@protoc_insertion_point(class_scope:vlsir.tetris.AbstractPort.ZTopEdgePort)
            },
        ),
        "ZTopInner": _reflection.GeneratedProtocolMessageType(
            "ZTopInner",
            (_message.Message,),
            {
                "DESCRIPTOR": _ABSTRACTPORT_ZTOPINNER,
                "__module__": "layout.tetris_pb2",
                # @@protoc_insertion_point(class_scope:vlsir.tetris.AbstractPort.ZTopInner)
            },
        ),
        "DESCRIPTOR": _ABSTRACTPORT,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.AbstractPort)
    },
)
_sym_db.RegisterMessage(AbstractPort)
_sym_db.RegisterMessage(AbstractPort.EdgePort)
_sym_db.RegisterMessage(AbstractPort.ZTopEdgePort)
_sym_db.RegisterMessage(AbstractPort.ZTopInner)

Instance = _reflection.GeneratedProtocolMessageType(
    "Instance",
    (_message.Message,),
    {
        "DESCRIPTOR": _INSTANCE,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Instance)
    },
)
_sym_db.RegisterMessage(Instance)

Place = _reflection.GeneratedProtocolMessageType(
    "Place",
    (_message.Message,),
    {
        "DESCRIPTOR": _PLACE,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Place)
    },
)
_sym_db.RegisterMessage(Place)

RelPlace = _reflection.GeneratedProtocolMessageType(
    "RelPlace",
    (_message.Message,),
    {
        "DESCRIPTOR": _RELPLACE,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.RelPlace)
    },
)
_sym_db.RegisterMessage(RelPlace)

Stack = _reflection.GeneratedProtocolMessageType(
    "Stack",
    (_message.Message,),
    {
        "DESCRIPTOR": _STACK,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Stack)
    },
)
_sym_db.RegisterMessage(Stack)

LayerEnum = _reflection.GeneratedProtocolMessageType(
    "LayerEnum",
    (_message.Message,),
    {
        "DESCRIPTOR": _LAYERENUM,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.LayerEnum)
    },
)
_sym_db.RegisterMessage(LayerEnum)

MetalLayer = _reflection.GeneratedProtocolMessageType(
    "MetalLayer",
    (_message.Message,),
    {
        "DESCRIPTOR": _METALLAYER,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.MetalLayer)
    },
)
_sym_db.RegisterMessage(MetalLayer)

ViaLayer = _reflection.GeneratedProtocolMessageType(
    "ViaLayer",
    (_message.Message,),
    {
        "DESCRIPTOR": _VIALAYER,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.ViaLayer)
    },
)
_sym_db.RegisterMessage(ViaLayer)

PrimitiveLayer = _reflection.GeneratedProtocolMessageType(
    "PrimitiveLayer",
    (_message.Message,),
    {
        "DESCRIPTOR": _PRIMITIVELAYER,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.PrimitiveLayer)
    },
)
_sym_db.RegisterMessage(PrimitiveLayer)

TrackSpec = _reflection.GeneratedProtocolMessageType(
    "TrackSpec",
    (_message.Message,),
    {
        "TrackEntry": _reflection.GeneratedProtocolMessageType(
            "TrackEntry",
            (_message.Message,),
            {
                "DESCRIPTOR": _TRACKSPEC_TRACKENTRY,
                "__module__": "layout.tetris_pb2",
                # @@protoc_insertion_point(class_scope:vlsir.tetris.TrackSpec.TrackEntry)
            },
        ),
        "Repeat": _reflection.GeneratedProtocolMessageType(
            "Repeat",
            (_message.Message,),
            {
                "DESCRIPTOR": _TRACKSPEC_REPEAT,
                "__module__": "layout.tetris_pb2",
                # @@protoc_insertion_point(class_scope:vlsir.tetris.TrackSpec.Repeat)
            },
        ),
        "DESCRIPTOR": _TRACKSPEC,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.TrackSpec)
    },
)
_sym_db.RegisterMessage(TrackSpec)
_sym_db.RegisterMessage(TrackSpec.TrackEntry)
_sym_db.RegisterMessage(TrackSpec.Repeat)

Xy = _reflection.GeneratedProtocolMessageType(
    "Xy",
    (_message.Message,),
    {
        "DESCRIPTOR": _XY,
        "__module__": "layout.tetris_pb2",
        # @@protoc_insertion_point(class_scope:vlsir.tetris.Xy)
    },
)
_sym_db.RegisterMessage(Xy)

if _descriptor._USE_C_DESCRIPTORS == False:
    DESCRIPTOR._options = None
    _LIBRARY._serialized_start = 83
    _LIBRARY._serialized_end = 188
    _CELL._serialized_start = 191
    _CELL._serialized_end = 375
    _LAYOUT._serialized_start = 378
    _LAYOUT._serialized_end = 566
    _ASSIGN._serialized_start = 568
    _ASSIGN._serialized_end = 627
    _TRACKCROSS._serialized_start = 629
    _TRACKCROSS._serialized_end = 719
    _TRACKREF._serialized_start = 721
    _TRACKREF._serialized_end = 761
    _OUTLINE._serialized_start = 763
    _OUTLINE._serialized_end = 810
    _ABSTRACT._serialized_start = 812
    _ABSTRACT._serialized_end = 919
    _ABSTRACTPORT._serialized_start = 922
    _ABSTRACTPORT._serialized_end = 1457
    _ABSTRACTPORT_EDGEPORT._serialized_start = 1126
    _ABSTRACTPORT_EDGEPORT._serialized_end = 1226
    _ABSTRACTPORT_ZTOPEDGEPORT._serialized_start = 1228
    _ABSTRACTPORT_ZTOPEDGEPORT._serialized_end = 1346
    _ABSTRACTPORT_ZTOPINNER._serialized_start = 1348
    _ABSTRACTPORT_ZTOPINNER._serialized_end = 1399
    _ABSTRACTPORT_PORTSIDE._serialized_start = 1401
    _ABSTRACTPORT_PORTSIDE._serialized_end = 1449
    _INSTANCE._serialized_start = 1460
    _INSTANCE._serialized_end = 1601
    _PLACE._serialized_start = 1603
    _PLACE._serialized_end = 1691
    _RELPLACE._serialized_start = 1693
    _RELPLACE._serialized_end = 1703
    _STACK._serialized_start = 1706
    _STACK._serialized_end = 1912
    _LAYERENUM._serialized_start = 1914
    _LAYERENUM._serialized_end = 2037
    _LAYERENUM_LAYERTYPE._serialized_start = 1991
    _LAYERENUM_LAYERTYPE._serialized_end = 2037
    _METALLAYER._serialized_start = 2040
    _METALLAYER._serialized_end = 2377
    _METALLAYER_DIR._serialized_start = 2302
    _METALLAYER_DIR._serialized_end = 2328
    _METALLAYER_PRIMITIVEMODE._serialized_start = 2330
    _METALLAYER_PRIMITIVEMODE._serialized_end = 2377
    _VIALAYER._serialized_start = 2380
    _VIALAYER._serialized_end = 2543
    _PRIMITIVELAYER._serialized_start = 2545
    _PRIMITIVELAYER._serialized_end = 2596
    _TRACKSPEC._serialized_start = 2599
    _TRACKSPEC._serialized_end = 2933
    _TRACKSPEC_TRACKENTRY._serialized_start = 2716
    _TRACKSPEC_TRACKENTRY._serialized_end = 2848
    _TRACKSPEC_TRACKENTRY_TRACKTYPE._serialized_start = 2806
    _TRACKSPEC_TRACKENTRY_TRACKTYPE._serialized_end = 2848
    _TRACKSPEC_REPEAT._serialized_start = 2850
    _TRACKSPEC_REPEAT._serialized_end = 2925
    _XY._serialized_start = 2935
    _XY._serialized_end = 2961
# @@protoc_insertion_point(module_scope)
