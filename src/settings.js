import {createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react";

const appId = "c4246a1279f64013a03de79605027567"
const token = "006c4246a1279f64013a03de79605027567IADJ/bxE96I0dsNM7FSyNg+eU0kMyskjYLwTqI9yWcIPOi6isjIAAAAAEABJ0h4ONWf+YQEAAQA0Z/5h"


export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "sus";