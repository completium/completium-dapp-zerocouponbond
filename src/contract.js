export const ZCBContractCode = [
  {  "prim": "storage",
"args": [
  {  "prim": "pair",
     "args": [
       {  "prim": "address",
          "annots": [
            "%issuer"
          ]
       },
       {  "prim": "pair",
          "args": [
            {  "prim": "address",
               "annots": [
                 "%subscriber"
               ]
            },
            {  "prim": "pair",
               "args": [
                 {  "prim": "mutez",
                    "annots": [
                      "%facevalue"
                    ]
                 },
                 {  "prim": "pair",
                    "args": [
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "int"  },
                           {  "prim": "nat"  }
                         ]
                         ,
                         "annots": [
                           "%discount"
                         ]
                      },
                      {  "prim": "pair",
                         "args": [
                           {  "prim": "int",
                              "annots": [
                                "%maturityduration"
                              ]
                           },
                           {  "prim": "pair",
                              "args": [
                                {  "prim": "int",
                                   "annots": [
                                     "%paybackduration"
                                   ]
                                },
                                {  "prim": "pair",
                                   "args": [
                                     {  "prim": "bool",
                                        "annots": [
                                          "%issuersigned"
                                        ]
                                     },
                                     {  "prim": "pair",
                                        "args": [
                                          {  "prim": "bool",
                                             "annots": [
                                               "%subscribersigned"
                                             ]
                                          },
                                          {  "prim": "pair",
                                             "args": [
                                               {  "prim": "option",
                                                  "args": [
                                                    {  "prim": "timestamp"  }
                                                  ]
                                                  ,
                                                  "annots": [
                                                    "%signaturedate"
                                                  ]
                                               },
                                               {  "prim": "int",
                                                  "annots": [
                                                    "%_state"
                                                  ]
                                               }
                                             ]
                                          }
                                        ]
                                     }
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            }
          ]
       }
     ]
  }
]
},
{  "prim": "parameter",
"args": [
{  "prim": "or",
  "args": [
    {  "prim": "unit",
       "annots": [
         "%toSigned"
       ]
    },
    {  "prim": "or",
       "args": [
         {  "prim": "unit",
            "annots": [
              "%sign"
            ]
         },
         {  "prim": "or",
            "args": [
              {  "prim": "unit",
                 "annots": [
                   "%terminate"
                 ]
              },
              {  "prim": "unit",
                 "annots": [
                   "%dispute"
                 ]
              }
            ]
         }
       ]
    }
  ]
}
]
},
{  "prim": "code",
"args": [
[  {  "prim": "NIL",
     "args": [
       {  "prim": "operation"  }
     ]
},
{  "prim": "DIG",
  "args": [
    {  "int": "1"  }
  ]
},
{  "prim": "UNPAIR"  },
{  "prim": "DIP",
  "args": [
    {  "int": "1"  },
    [  {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "UNPAIR"  },
    {  "prim": "SWAP"  }  ]
  ]
},
{  "prim": "IF_LEFT",
  "args": [
    [  {  "prim": "DROP",
          "args": [
            {  "int": "1"  }
          ]
    },
    {  "prim": "SELF"  },
    {  "prim": "ADDRESS"  },
    {  "prim": "SENDER"  },
    {  "prim": "COMPARE"  },
    {  "prim": "EQ"  },
    {  "prim": "NOT"  },
    {  "prim": "IF",
       "args": [
         [  {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "InvalidCaller"  }
               ]
         },
         {  "prim": "FAILWITH"  }  ],
         [    ]
       ]
    },
    {  "prim": "PUSH",
       "args": [
         {  "prim": "int"  },
         {  "int": "0"  }
       ]
    },
    {  "prim": "DIG",
       "args": [
         {  "int": "1"  }
       ]
    },
    {  "prim": "DUP"  },
    {  "prim": "DUG",
       "args": [
         {  "int": "2"  }
       ]
    },
    {  "prim": "COMPARE"  },
    {  "prim": "EQ"  },
    {  "prim": "IF",
       "args": [
         [  {  "prim": "NOW"  },
         {  "prim": "SOME"  },
         {  "prim": "DIP",
            "args": [
              {  "int": "1"  },
              [  {  "prim": "DIG",
                    "args": [
                      {  "int": "1"  }
                    ]
              },
              {  "prim": "DROP",
                 "args": [
                   {  "int": "1"  }
                 ]
              }  ]
            ]
         },
         {  "prim": "DUG",
            "args": [
              {  "int": "1"  }
            ]
         },
         {  "prim": "PUSH",
            "args": [
              {  "prim": "int"  },
              {  "int": "1"  }
            ]
         },
         {  "prim": "SWAP"  },
         {  "prim": "DROP",
            "args": [
              {  "int": "1"  }
            ]
         }  ],
         [  {  "prim": "PUSH",
               "args": [
                 {  "prim": "string"  },
                 {  "string": "InvalidState"  }
               ]
         },
         {  "prim": "FAILWITH"  }  ]
       ]
    },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "SWAP"  },
    {  "prim": "PAIR"  },
    {  "prim": "DIG",
       "args": [
         {  "int": "1"  }
       ]
    },
    {  "prim": "PAIR"  }  ],
    [  {  "prim": "IF_LEFT",
          "args": [
            [  {  "prim": "DROP",
                  "args": [
                    {  "int": "1"  }
                  ]
            },
            {  "prim": "DIG",
               "args": [
                 {  "int": "9"  }
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUG",
               "args": [
                 {  "int": "10"  }
               ]
            },
            {  "prim": "SENDER"  },
            {  "prim": "COMPARE"  },
            {  "prim": "EQ"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "PUSH",
                       "args": [
                         {  "prim": "bool"  },
                         {  "prim": "True"  }
                       ]
                 },
                 {  "prim": "DIP",
                    "args": [
                      {  "int": "1"  },
                      [  {  "prim": "DIG",
                            "args": [
                              {  "int": "3"  }
                            ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 },
                 {  "prim": "DUG",
                    "args": [
                      {  "int": "3"  }
                    ]
                 }  ],
                 [  {  "prim": "DIG",
                       "args": [
                         {  "int": "8"  }
                       ]
                 },
                 {  "prim": "DUP"  },
                 {  "prim": "DUG",
                    "args": [
                      {  "int": "9"  }
                    ]
                 },
                 {  "prim": "SENDER"  },
                 {  "prim": "COMPARE"  },
                 {  "prim": "EQ"  },
                 {  "prim": "IF",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "bool"  },
                              {  "prim": "True"  }
                            ]
                      },
                      {  "prim": "DIP",
                         "args": [
                           {  "int": "1"  },
                           [  {  "prim": "DIG",
                                 "args": [
                                   {  "int": "2"  }
                                 ]
                           },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
                              ]
                           }  ]
                         ]
                      },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "DIG",
                         "args": [
                           {  "int": "7"  }
                         ]
                      },
                      {  "prim": "DUP"  },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "8"  }
                         ]
                      },
                      {  "prim": "DIG",
                         "args": [
                           {  "int": "7"  }
                         ]
                      },
                      {  "prim": "DUP"  },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "8"  }
                         ]
                      },
                      {  "prim": "PAIR"  },
                      {  "prim": "UNPAIR"  },
                      {  "prim": "UNPAIR"  },
                      {  "prim": "ABS"  },
                      {  "prim": "DIG",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "MUL"  },
                      {  "prim": "EDIV"  },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "DivByZero"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [    ]
                         ]
                      },
                      {  "prim": "CAR"  },
                      {  "prim": "DUP"  },
                      {  "prim": "AMOUNT"  },
                      {  "prim": "COMPARE"  },
                      {  "prim": "GE"  },
                      {  "prim": "NOT"  },
                      {  "prim": "IF",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "SUBSCRIBER_INVALID_TRANSFERRED"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [    ]
                         ]
                      },
                      {  "prim": "DIG",
                         "args": [
                           {  "int": "11"  }
                         ]
                      },
                      {  "prim": "DUP"  },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "12"  }
                         ]
                      },
                      {  "prim": "DIG",
                         "args": [
                           {  "int": "11"  }
                         ]
                      },
                      {  "prim": "DUP"  },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "12"  }
                         ]
                      },
                      {  "prim": "CONTRACT",
                         "args": [
                           {  "prim": "unit"  }
                         ]
                      },
                      {  "prim": "IF_NONE",
                         "args": [
                           [  {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "string"  },
                                   {  "string": "BadContract"  }
                                 ]
                           },
                           {  "prim": "FAILWITH"  }  ],
                           [    ]
                         ]
                      },
                      {  "prim": "DIG",
                         "args": [
                           {  "int": "2"  }
                         ]
                      },
                      {  "prim": "DUP"  },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "3"  }
                         ]
                      },
                      {  "prim": "UNIT"  },
                      {  "prim": "TRANSFER_TOKENS"  },
                      {  "prim": "CONS"  },
                      {  "prim": "DIP",
                         "args": [
                           {  "int": "1"  },
                           [  {  "prim": "DIG",
                                 "args": [
                                   {  "int": "11"  }
                                 ]
                           },
                           {  "prim": "DROP",
                              "args": [
                                {  "int": "1"  }
                              ]
                           }  ]
                         ]
                      },
                      {  "prim": "DUG",
                         "args": [
                           {  "int": "11"  }
                         ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ],
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "CALLER_NOT_A_SIGNER"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ]
                    ]
                 }  ]
               ]
            },
            {  "prim": "DIG",
               "args": [
                 {  "int": "2"  }
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUG",
               "args": [
                 {  "int": "3"  }
               ]
            },
            {  "prim": "DIG",
               "args": [
                 {  "int": "4"  }
               ]
            },
            {  "prim": "DUP"  },
            {  "prim": "DUG",
               "args": [
                 {  "int": "5"  }
               ]
            },
            {  "prim": "AND"  },
            {  "prim": "IF",
               "args": [
                 [  {  "prim": "DIG",
                       "args": [
                         {  "int": "10"  }
                       ]
                 },
                 {  "prim": "DUP"  },
                 {  "prim": "DUG",
                    "args": [
                      {  "int": "11"  }
                    ]
                 },
                 {  "prim": "SELF"  },
                 {  "prim": "ADDRESS"  },
                 {  "prim": "CONTRACT",
                    "args": [
                      {  "prim": "unit"  }
                    ]
                    ,
                    "annots": [
                      "%toSigned"
                    ]
                 },
                 {  "prim": "IF_NONE",
                    "args": [
                      [  {  "prim": "PUSH",
                            "args": [
                              {  "prim": "string"  },
                              {  "string": "BadContract"  }
                            ]
                      },
                      {  "prim": "FAILWITH"  }  ],
                      [    ]
                    ]
                 },
                 {  "prim": "PUSH",
                    "args": [
                      {  "prim": "mutez"  },
                      {  "int": "0"  }
                    ]
                 },
                 {  "prim": "UNIT"  },
                 {  "prim": "TRANSFER_TOKENS"  },
                 {  "prim": "CONS"  },
                 {  "prim": "DIP",
                    "args": [
                      {  "int": "1"  },
                      [  {  "prim": "DIG",
                            "args": [
                              {  "int": "10"  }
                            ]
                      },
                      {  "prim": "DROP",
                         "args": [
                           {  "int": "1"  }
                         ]
                      }  ]
                    ]
                 },
                 {  "prim": "DUG",
                    "args": [
                      {  "int": "10"  }
                    ]
                 }  ],
                 [    ]
               ]
            },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "SWAP"  },
            {  "prim": "PAIR"  },
            {  "prim": "DIG",
               "args": [
                 {  "int": "1"  }
               ]
            },
            {  "prim": "PAIR"  }  ],
            [  {  "prim": "IF_LEFT",
                  "args": [
                    [  {  "prim": "DROP",
                          "args": [
                            {  "int": "1"  }
                          ]
                    },
                    {  "prim": "DIG",
                       "args": [
                         {  "int": "9"  }
                       ]
                    },
                    {  "prim": "DUP"  },
                    {  "prim": "DUG",
                       "args": [
                         {  "int": "10"  }
                       ]
                    },
                    {  "prim": "SENDER"  },
                    {  "prim": "COMPARE"  },
                    {  "prim": "EQ"  },
                    {  "prim": "NOT"  },
                    {  "prim": "IF",
                       "args": [
                         [  {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "InvalidCaller"  }
                               ]
                         },
                         {  "prim": "FAILWITH"  }  ],
                         [    ]
                       ]
                    },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "int"  },
                         {  "int": "1"  }
                       ]
                    },
                    {  "prim": "DIG",
                       "args": [
                         {  "int": "1"  }
                       ]
                    },
                    {  "prim": "DUP"  },
                    {  "prim": "DUG",
                       "args": [
                         {  "int": "2"  }
                       ]
                    },
                    {  "prim": "COMPARE"  },
                    {  "prim": "EQ"  },
                    {  "prim": "IF",
                       "args": [
                         [  {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                         },
                         {  "prim": "DUP"  },
                         {  "prim": "DUG",
                            "args": [
                              {  "int": "2"  }
                            ]
                         },
                         {  "prim": "IF_NONE",
                            "args": [
                              [  {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "bool"  },
                                      {  "prim": "False"  }
                                    ]
                              }  ],
                              [  {  "prim": "DIG",
                                    "args": [
                                      {  "int": "8"  }
                                    ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "9"  }
                                 ]
                              },
                              {  "prim": "AMOUNT"  },
                              {  "prim": "COMPARE"  },
                              {  "prim": "GE"  },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "6"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "7"  }
                                 ]
                              },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "8"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "9"  }
                                 ]
                              },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "3"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "4"  }
                                 ]
                              },
                              {  "prim": "ADD"  },
                              {  "prim": "ADD"  },
                              {  "prim": "NOW"  },
                              {  "prim": "COMPARE"  },
                              {  "prim": "LE"  },
                              {  "prim": "NOW"  },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "9"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "10"  }
                                 ]
                              },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "4"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "5"  }
                                 ]
                              },
                              {  "prim": "ADD"  },
                              {  "prim": "COMPARE"  },
                              {  "prim": "LE"  },
                              {  "prim": "AND"  },
                              {  "prim": "AND"  },
                              {  "prim": "SWAP"  },
                              {  "prim": "DROP",
                                 "args": [
                                   {  "int": "1"  }
                                 ]
                              }  ]
                            ]
                         },
                         {  "prim": "IF",
                            "args": [
                              [  {  "prim": "DIG",
                                    "args": [
                                      {  "int": "10"  }
                                    ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "11"  }
                                 ]
                              },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "9"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "10"  }
                                 ]
                              },
                              {  "prim": "CONTRACT",
                                 "args": [
                                   {  "prim": "unit"  }
                                 ]
                              },
                              {  "prim": "IF_NONE",
                                 "args": [
                                   [  {  "prim": "PUSH",
                                         "args": [
                                           {  "prim": "string"  },
                                           {  "string": "BadContract"  }
                                         ]
                                   },
                                   {  "prim": "FAILWITH"  }  ],
                                   [    ]
                                 ]
                              },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "9"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "10"  }
                                 ]
                              },
                              {  "prim": "UNIT"  },
                              {  "prim": "TRANSFER_TOKENS"  },
                              {  "prim": "CONS"  },
                              {  "prim": "DIP",
                                 "args": [
                                   {  "int": "1"  },
                                   [  {  "prim": "DIG",
                                         "args": [
                                           {  "int": "10"  }
                                         ]
                                   },
                                   {  "prim": "DROP",
                                      "args": [
                                        {  "int": "1"  }
                                      ]
                                   }  ]
                                 ]
                              },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "10"  }
                                 ]
                              },
                              {  "prim": "PUSH",
                                 "args": [
                                   {  "prim": "int"  },
                                   {  "int": "2"  }
                                 ]
                              },
                              {  "prim": "SWAP"  },
                              {  "prim": "DROP",
                                 "args": [
                                   {  "int": "1"  }
                                 ]
                              }  ],
                              [    ]
                            ]
                         }  ],
                         [  {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "InvalidState"  }
                               ]
                         },
                         {  "prim": "FAILWITH"  }  ]
                       ]
                    },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "DIG",
                       "args": [
                         {  "int": "1"  }
                       ]
                    },
                    {  "prim": "PAIR"  }  ],
                    [  {  "prim": "DROP",
                          "args": [
                            {  "int": "1"  }
                          ]
                    },
                    {  "prim": "DIG",
                       "args": [
                         {  "int": "8"  }
                       ]
                    },
                    {  "prim": "DUP"  },
                    {  "prim": "DUG",
                       "args": [
                         {  "int": "9"  }
                       ]
                    },
                    {  "prim": "SENDER"  },
                    {  "prim": "COMPARE"  },
                    {  "prim": "EQ"  },
                    {  "prim": "NOT"  },
                    {  "prim": "IF",
                       "args": [
                         [  {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "InvalidCaller"  }
                               ]
                         },
                         {  "prim": "FAILWITH"  }  ],
                         [    ]
                       ]
                    },
                    {  "prim": "PUSH",
                       "args": [
                         {  "prim": "int"  },
                         {  "int": "1"  }
                       ]
                    },
                    {  "prim": "DIG",
                       "args": [
                         {  "int": "1"  }
                       ]
                    },
                    {  "prim": "DUP"  },
                    {  "prim": "DUG",
                       "args": [
                         {  "int": "2"  }
                       ]
                    },
                    {  "prim": "COMPARE"  },
                    {  "prim": "EQ"  },
                    {  "prim": "IF",
                       "args": [
                         [  {  "prim": "DIG",
                               "args": [
                                 {  "int": "1"  }
                               ]
                         },
                         {  "prim": "DUP"  },
                         {  "prim": "DUG",
                            "args": [
                              {  "int": "2"  }
                            ]
                         },
                         {  "prim": "IF_NONE",
                            "args": [
                              [  {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "bool"  },
                                      {  "prim": "False"  }
                                    ]
                              }  ],
                              [  {  "prim": "NOW"  },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "6"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "7"  }
                                 ]
                              },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "8"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "9"  }
                                 ]
                              },
                              {  "prim": "DIG",
                                 "args": [
                                   {  "int": "3"  }
                                 ]
                              },
                              {  "prim": "DUP"  },
                              {  "prim": "DUG",
                                 "args": [
                                   {  "int": "4"  }
                                 ]
                              },
                              {  "prim": "ADD"  },
                              {  "prim": "ADD"  },
                              {  "prim": "COMPARE"  },
                              {  "prim": "LE"  },
                              {  "prim": "SWAP"  },
                              {  "prim": "DROP",
                                 "args": [
                                   {  "int": "1"  }
                                 ]
                              }  ]
                            ]
                         },
                         {  "prim": "IF",
                            "args": [
                              [  {  "prim": "PUSH",
                                    "args": [
                                      {  "prim": "int"  },
                                      {  "int": "3"  }
                                    ]
                              },
                              {  "prim": "SWAP"  },
                              {  "prim": "DROP",
                                 "args": [
                                   {  "int": "1"  }
                                 ]
                              }  ],
                              [    ]
                            ]
                         }  ],
                         [  {  "prim": "PUSH",
                               "args": [
                                 {  "prim": "string"  },
                                 {  "string": "InvalidState"  }
                               ]
                         },
                         {  "prim": "FAILWITH"  }  ]
                       ]
                    },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "SWAP"  },
                    {  "prim": "PAIR"  },
                    {  "prim": "DIG",
                       "args": [
                         {  "int": "1"  }
                       ]
                    },
                    {  "prim": "PAIR"  }  ]
                  ]
            }  ]
          ]
    }  ]
  ]
}  ]
]
}  ];

export const getStorage = (
  issuer,      /* ex. "tz1bfVgcJC4ukaQSHUe1EbrUd5SekXeP9CWk" */
  subscriber,  /* ex. "tz1Lc2qBKEWCBeDU8npG6zCeCqpmaegRi6Jg" */
  facevalue,   /* ex. "10000000" (mutez) */
  discountnum, /* ex. "7"  */
  discountden, /* ex. "50" */
  duration,    /* ex. "60" (in seconds) */
  period,      /* ex. "60" (in seconds) */
) => {
  return {
  "prim": "Pair",
  "args": [
  {  "string": issuer  },
  {  "prim": "Pair",
     "args": [
       {  "string": subscriber  },
       {  "prim": "Pair",
          "args": [
            {  "int": facevalue  },
            {  "prim": "Pair",
               "args": [
                 {  "prim": "Pair",
                    "args": [
                      {  "int": discountnum  },
                      {  "int": discountden  }
                    ]
                 },
                 {  "prim": "Pair",
                    "args": [
                      {  "int": duration  },
                      {  "prim": "Pair",
                         "args": [
                           {  "int": period  },
                           {  "prim": "Pair",
                              "args": [
                                {  "prim": "False"  },
                                {  "prim": "Pair",
                                   "args": [
                                     {  "prim": "False"  },
                                     {  "prim": "Pair",
                                        "args": [
                                          {  "prim": "None"  },
                                          {  "int": "0"  }
                                        ]
                                     }
                                   ]
                                }
                              ]
                           }
                         ]
                      }
                    ]
                 }
               ]
            }
          ]
       }
     ]
  }]}
};
