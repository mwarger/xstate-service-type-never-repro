// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    setParticipants: "done.invoke.ClassRegistration.FetchingParticipants:invocation[0]";
  };
  internalEvents: {
    "done.invoke.ClassRegistration.FetchingParticipants:invocation[0]": {
      type: "done.invoke.ClassRegistration.FetchingParticipants:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "": { type: "" };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    fetchParticipants: "done.invoke.ClassRegistration.FetchingParticipants:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: "fetchParticipants";
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchParticipants: "";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "INIT"
    | "FetchingParticipants"
    | "ParticipantSelectionScreen"
    | "FetchParticipantError";
  tags: never;
}
