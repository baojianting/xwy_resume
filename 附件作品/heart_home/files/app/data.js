﻿$axure.loadCurrentPage({
  "url":"app.html",
  "generationDate":new Date(1479704708216.84),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"ece81d4a4d2942738457982b96fc0056",
    "type":"Axure:Page",
    "name":"APP",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"7a27a9feab8a4187b14ce55c9a3d19fd",
          "label":"",
          "type":"referenceDiagramObject",
          "styleType":"referenceDiagramObject",
          "visible":true,
          "style":{
            "location":{
              "x":69,
              "y":0}},
          "adaptiveStyles":{
},
          "masterId":"a086e7cb87c144058818b9a3550c238f"},
{
          "id":"50cbb5d5f0e54f42be28a8d62d7a3025",
          "label":"闪屏页",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":false,
          "style":{
            "location":{
              "x":96,
              "y":108},
            "size":{
              "width":375,
              "height":668},
            "visible":false},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"826a241482b24caeb6fa1ad9b2c5427e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "location":{
                  "x":96,
                  "y":108},
                "size":{
                  "width":375,
                  "height":668},
                "visible":false},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/app/闪屏页_u3.jpg"}},
{
          "id":"d054f9591b4442c5b96f20be0569133c",
          "label":"背景图",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":97,
              "y":108},
            "size":{
              "width":373,
              "height":664}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"434c9ae773b34f8cb0d4fad03d8f8fd9",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":97,
                  "y":108},
                "size":{
                  "width":373,
                  "height":664}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/app/背景图_u5.jpg"}},
{
          "id":"023d0d979d94413f902b960914efb99e",
          "label":"图标",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":211,
              "y":135},
            "size":{
              "width":61,
              "height":61}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"27ada0aca9424c29a8ea9640f9157423",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":211,
                  "y":135},
                "size":{
                  "width":61,
                  "height":61}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"隐藏 背景图 淡入淡出 1000 ms,<br>图标 淡入淡出 1000 ms,<br>心家 淡入淡出 1000 ms",
                      "objectsToFades":[{
                          "objectPath":["d054f9591b4442c5b96f20be0569133c"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "easing":"fade",
                              "duration":1000,
                              "showType":"none"}}},
{
                          "objectPath":["023d0d979d94413f902b960914efb99e"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "easing":"fade",
                              "duration":1000,
                              "showType":"none"}}},
{
                          "objectPath":["9be4dae919b541acaadd071820474ee9"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "easing":"fade",
                              "duration":1000,
                              "showType":"none"}}}]},
{
                      "action":"fadeWidget",
                      "description":"显示 闪屏页 淡入淡出 500 ms",
                      "objectsToFades":[{
                          "objectPath":["50cbb5d5f0e54f42be28a8d62d7a3025"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"fade",
                              "duration":500,
                              "showType":"none"}}}]},
{
                      "action":"wait",
                      "description":"等待2000毫秒",
                      "waitTime":2000},
{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 首页-方案",
                      "target":{
                        "targetType":"page",
                        "url":"首页-方案.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/app/图标_u7.png"}},
{
          "id":"9be4dae919b541acaadd071820474ee9",
          "label":"心家",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontName":"'苹方 中等', '苹方'",
            "fontSize":"12px",
            "location":{
              "x":231,
              "y":197},
            "size":{
              "width":25,
              "height":17}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a6c4c81a810d45b5bf8a07d1880fe5df",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontName":"'苹方 中等', '苹方'",
                "fontSize":"12px",
                "location":{
                  "x":231,
                  "y":197},
                "size":{
                  "width":25,
                  "height":17}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
    "a086e7cb87c144058818b9a3550c238f":{
      "packageId":"a086e7cb87c144058818b9a3550c238f",
      "type":"Axure:Master",
      "name":"新母版 1",
      "notes":{
},
      "style":{
        "baseStyle":"627587b6038d43cca051c114ac41ad32",
        "pageAlignment":"near",
        "fill":{
          "fillType":"solid",
          "color":0xFFFFFFFF},
        "image":null,
        "imageHorizontalAlignment":"near",
        "imageVerticalAlignment":"near",
        "imageRepeat":"auto",
        "favicon":null,
        "sketchFactor":"0",
        "colorStyle":"appliedColor",
        "fontName":"应用字体",
        "borderWidth":"0"},
      "adaptiveStyles":{
},
      "interactionMap":{
},
      "diagram":{
        "objects":[{
            "id":"623c214f22b644b990c3bc1c0a100f4d",
            "label":"",
            "type":"imageBox",
            "styleType":"imageBox",
            "visible":true,
            "style":{
              "size":{
                "width":430,
                "height":880}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"7feffeea2daa4300973110505dfb8fb0",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "size":{
                    "width":430,
                    "height":880}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"images/app/u1.jpg"}}]}}},
  "objectPaths":{
    "7a27a9feab8a4187b14ce55c9a3d19fd":{
      "scriptId":"u0",
      "623c214f22b644b990c3bc1c0a100f4d":{
        "scriptId":"u1"},
      "7feffeea2daa4300973110505dfb8fb0":{
        "scriptId":"u2"}},
    "50cbb5d5f0e54f42be28a8d62d7a3025":{
      "scriptId":"u3"},
    "826a241482b24caeb6fa1ad9b2c5427e":{
      "scriptId":"u4"},
    "d054f9591b4442c5b96f20be0569133c":{
      "scriptId":"u5"},
    "434c9ae773b34f8cb0d4fad03d8f8fd9":{
      "scriptId":"u6"},
    "023d0d979d94413f902b960914efb99e":{
      "scriptId":"u7"},
    "27ada0aca9424c29a8ea9640f9157423":{
      "scriptId":"u8"},
    "9be4dae919b541acaadd071820474ee9":{
      "scriptId":"u9"},
    "a6c4c81a810d45b5bf8a07d1880fe5df":{
      "scriptId":"u10"}}});