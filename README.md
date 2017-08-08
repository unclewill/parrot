# parrot
Trivial Google Assistant parrot app

This is minimal example of a Google Assistant app which is implemented in Node and Express. It simply speaks what it hears. 

Note that the "query patterns" used to trigger a "deep link intent" are not strictly required by the sample. Rather they exist to illustrate a slightly different way to organize all of the utterances that correspond to a single deep link. Instead of enumerating all of the ways a could be made

    "when the next M2 arrives",
    "when the M2 arrives",
    "when a M2 arrives",
    "when an M2 arrives",
    "at what time will the next M2 arrive",
    "at what time will the M2 arrive",
    "at what time will a M2 arrive",
    "at what time will an M2 arrive"
    ...

as is typical, the various sections of the query are broken out into custom types and the enumeration of all of the ways a section can be spoken appear in the definition of the type. The downside of this approach is that in the Cartesian product of the types may there may be some utterances that are not normally spoken.
