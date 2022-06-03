package com.naturareactnativecomponents;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.bridge.ReadableMap;

public class SelectViewAdapter extends ArrayAdapter<ReadableMap> {

    private final LayoutInflater mInflater;

    public SelectViewAdapter(Context context, ReadableMap[] data) {
      super(context, 0, data);

      mInflater = (LayoutInflater) Assertions.assertNotNull(
          context.getSystemService(Context.LAYOUT_INFLATER_SERVICE));
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
      return getView(position, convertView, parent, false);
    }

    @Override
    public View getDropDownView(int position, View convertView, ViewGroup parent) {
      return getView(position, convertView, parent, true);
    }

    private View getView(int position, View convertView, ViewGroup parent, boolean isDropdown) {
      ReadableMap item = getItem(position);

      if (convertView == null) {
        int layoutResId = isDropdown
            ? android.R.layout.simple_spinner_dropdown_item
            : android.R.layout.simple_spinner_item;
        convertView = mInflater.inflate(layoutResId, parent, false);
      }

      TextView textView = (TextView) convertView;
      textView.setText(item.getString("label"));

      return convertView;
    }

  }
