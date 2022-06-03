package com.naturareactnativecomponents;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Spinner;

import androidx.appcompat.widget.AppCompatSpinner;

public class ReactSelect extends AppCompatSpinner {

  private int mMode = Spinner.MODE_DIALOG;
  private OnSelectListener mOnSelectListener;
  private OnFocusListener mOnFocusListener;
  private int mOldElementSize = Integer.MIN_VALUE;
  private boolean mIsOpen = false;

  private final OnItemSelectedListener mItemSelectedListener = new OnItemSelectedListener() {
    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
      if (mOnSelectListener != null) {
        mOnSelectListener.onItemSelected(position);
      }
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) {
      if (mOnSelectListener != null) {
        mOnSelectListener.onItemSelected(-1);
      }
    }
  };

   /**
  * Listener interface for ReactSelect events.
  */
  public interface OnSelectListener {
    void onItemSelected(int position);
  }

  public interface OnFocusListener {
    void onPickerBlur();
    void onPickerFocus();
  }

  public ReactSelect(Context context) {
    super(context);
  }

  public ReactSelect(Context context, int mode) {
    super(context, mode);
    mMode = mode;
  }

  public ReactSelect(Context context, AttributeSet attrs) {
    super(context, attrs);
  }

  public ReactSelect(Context context, AttributeSet attrs, int defStyle) {
    super(context, attrs, defStyle);
  }

  public ReactSelect(Context context, AttributeSet attrs, int defStyle, int mode) {
    super(context, attrs, defStyle, mode);
    mMode = mode;
  }

  @Override
  protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
    super.onLayout(changed, left, top, right, bottom);

    // onItemSelected gets fired immediately after layout because checkSelectionChanged() in
    // AdapterView updates the selection position from the default INVALID_POSITION.
    // To match iOS behavior, which no onItemSelected during initial layout.
    // We setup the listener after layout.
    if (getOnItemSelectedListener() == null)
      setOnItemSelectedListener(mItemSelectedListener);
  }

  public void setOnSelectListener(OnSelectListener onSelectListener) {
    mOnSelectListener = onSelectListener;
  }

  public void setOnFocusListener(OnFocusListener onFocusListener) {
    mOnFocusListener = onFocusListener;
  }

  public OnSelectListener getOnSelectListener() {
    return mOnSelectListener;
  }

}
