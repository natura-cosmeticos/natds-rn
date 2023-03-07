package com.naturareactnativecomponents;

import android.graphics.Color;
import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class SelectViewManager extends SimpleViewManager<ReactSelect> {
    public static final String REACT_CLASS = "Select";

    @Override
    @NonNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    @NonNull
    public ReactSelect createViewInstance(ThemedReactContext reactContext) {
        return new ReactSelect(reactContext);
    }

    @ReactProp(name = "color")
    public void setColor(View view, String color) {
        view.setBackgroundColor(Color.parseColor(color));
    }

    @ReactProp(name = "items")
    public void setItems(ReactSelect view, ReadableArray items) {

      if (items != null) {
        ReadableMap[] data = new ReadableMap[items.size()];
        for (int i = 0; i < items.size(); i++) {
          data[i] = items.getMap(i);
        }
        SelectViewAdapter adapter = new SelectViewAdapter(view.getContext(), data);
        view.setAdapter(adapter);
      } else {
        view.setAdapter(null);
      }
    }
}
